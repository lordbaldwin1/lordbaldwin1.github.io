import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      try {
        const apiKey = 'c05e2480be1773bf96cd2c55f1ec2322';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
        );
        if (!response.ok) throw new Error('Failed to fetch weather data');
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (error) => {
            console.warn('Error retrieving location: ', error.message);
            fetchWeather(45.5051, -122.6750);
          }
        );
      } else {
        console.warn('Geolocation is not supported by this browser.');
        fetchWeather(45.5051, -122.6750);
      }
    };

    getLocation();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const getIconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-container">
      {weatherData ? (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <img
            src={getIconUrl(weatherData.weather[0].icon)}
            alt={weatherData.weather[0].description}
          />
          <p>Temp: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Could not fetch weather data.</p>
      )}
    </div>
  );
};

export default Weather;
