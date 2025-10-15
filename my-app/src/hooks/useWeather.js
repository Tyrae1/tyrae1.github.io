import {useState} from 'react';

export default function useWeather(){
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
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

            const wRes = await fetch(wUrl);
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
                latitude,
                longitude,
                current,
                days: days.slice(0, 5),
            });
        } catch (err) {
            console.error('weather fetch error:', err);
            setError('Failed to load weather data.');
        } finally {
            setLoading(false);
        }
    };

    const fetchByCoords = async (latitude, longitude, name = '', country = '') => {
      setError(null);
      setLoading(true);
      setWeather(null);

      try {
          const wUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
          const wRes = await fetch(wUrl);
          if (!wRes.ok) throw new Error ('Weather request failed.');
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
              city: name || '_',
              country: country || '',
              latitude,
              longitude,
              current,
              days: days.slice(0, 5),
          });
      } catch (err) {
          console.error('useWeather by coordinates error:', err);
          setError('Failed to load weather data.');
      } finally {
          setLoading(false);
      }
      };

    return {weather, loading, error, fetchWeather, fetchByCoords, setWeather};
}