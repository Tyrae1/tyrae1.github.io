import {Container, Alert, Spinner} from 'react-bootstrap';
import SearchBar from './components/SearchBar.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import FavoriteList from './components/FavoriteList';
import {useState, useEffect} from 'react';
import useWeather from './hooks/useWeather.js';

function App() {
    const [favorite, setFavorite] = useState([]);
    const favKey = (name, country, lat, lon) => `${name}|${country}|${lat}|${lon}`;
    const {weather, loading, error, fetchWeather, fetchByCoords} = useWeather();

    const handleSearch = (city) => fetchWeather(city);

    const handleAddFavorite = (w) => {
        const id = favKey(w.city, w.country, w.latitude, w.longitude);
        setFavorite((prev) => {
            if (prev.some(f => f.id === id)) return prev;
            return [
                ...prev,
                {
                    id,
                    name: w.city,
                    country: w.country,
                    lat: w.latitude,
                    lon: w.longitude,
                },
            ];
        });
    };

    const handleRemoveFavoriteByWeather = (w) => {
      const id = favKey(w.city, w.country, w.latitude, w.longitude);
      setFavorite((prev) => prev.filter(f => f.id !== id));
    };

    const handleFavorite = (fav) => {
        fetchByCoords(fav.lat, fav.lon, fav.name, fav.country);
    };
    const handleRemoveFavorite = (id) => {
        setFavorite((prev)=> prev.filter((x)=> x.id !== id));
    };

    useEffect(() => {
        try {
            const raw = localStorage.getItem('favorite-cities');
            if (raw) setFavorite(JSON.parse(raw));
        } catch {}
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('favorite-cities', JSON.stringify(favorite));
        } catch {}
    }, [favorite]);

    return (
        <Container className="py-5 text-center" style={{maxWidth: 720}}>
            <h1 className="mb-4">Weather forecast</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && (
                <div className="d-flex justify-content-center my-4">
                    <Spinner animation="border" />
                </div>
            )}
            {error && (<Alert variant="danger" className="mx-auto" style={{maxWidth: 520}}>
                {error}
            </Alert>)}
            {!loading && !error && weather && (
                <WeatherCard
                    data={weather}
                    isFavorite={favorite.some(f => f.id === `${weather.city}|${weather.country}|${weather.latitude}|${weather.longitude}`)}
                    onAddFavorite={() => handleAddFavorite(weather)}
                    onRemoveFavorite={() => handleRemoveFavoriteByWeather(weather)}
                    />
            )}
        <hr className="my-5" />
            <FavoriteList
            items = {favorite}
            onSelect={handleFavorite}
            onRemove={handleRemoveFavorite}
            />
        </Container>
    );
}

export default App;