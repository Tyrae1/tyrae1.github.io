import React from 'react';
import {Container, Alert, Spinner} from 'react-bootstrap';
import SearchBar from './components/SearchBar.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import FavoriteList from './components/FavoriteList';
import {useState} from 'react';

function App() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleSearch = async (city) => {
        setError(null);
        setLoading(true);
        setWeather(null);

        try {
            const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=uk`;
            const geoRes = await fetch(geoUrl);
            const geoData = await geoRes.json();

            if (!geoData.results || geoData.results.length === 0) {
                setError('City is not find. Try another city!');
                setLoading(false);
                return;
            }

            const {name, country, latitude, longitude} = geoData.results[0];
            console.log('lat/lon:', latitude, longitude);

            const wUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
            console.log('weather URL:', wUrl);

            const wRes = await fetch(wUrl, {method: 'GET', mode: 'cors'});
            console.log('weather status:', wRes.status);

            if (!wRes.ok) {
                const text = await wRes.text().catch(() => '');
                throw new Error(`Weather HTTP ${wRes.status}: ${text.slice(0, 200)}`);
            }
            const wData = await wRes.json();

            const current = {
                temperature: wData.current_weather?.temperature ?? null,
                windspeed: wData.current_weather?.windspeed ?? null,
            };
            const days = (wData.daily?.time || []).map((date, i) => ({
                date,
                tmin: wData.daily?.temperature_2m_min?.[i] ?? null,
                tmax: wData.daily?.temperature_2m_max?.[i] ?? null,
            }));

            setWeather({
                city: name,
                country,
                current,
                days: days.slice(0, 5),
            });
        } catch (err) {
            console.error('weather fetch error:', err);
            throw err;
        } finally {
            setLoading(false);
        }
    };
    return (
        <Container className="py-5 text-center" style={{maxWidth: 720}}>
            <h1 className="mb-4">Weather forecast</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && (
                <div className="d-flex justify-content-center my-4">
                    <Spinner animation="border" />
                </div>
            )}
            {error && <Alert variant="danger" className="mx-auto" style={{maxWidth: 520}}>
                {error}
            </Alert>}
            {!loading && !error && weather && <WeatherCard data={weather} />}
        <hr className="my-5" />
            <FavoriteList/>
        </Container>
    );
}

export default App;