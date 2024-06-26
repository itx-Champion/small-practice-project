import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('okara');
  const [weatherData, setWeatherData] = useState({});
  const [searchInput, setSearchInput] = useState('');

  const getCountryName = (getCode) => {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(getCode);
  };

  const getDateTime = (getTime) => {
    const curDate = new Date(getTime * 1000);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(curDate);
  };

  const getWeatherData = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a38d8044ba865c129d199f50215cf908`;
    try {
      const getApiData = await fetch(apiUrl, {
        headers: {
          accept: 'application/json',
        },
      });
      const data = await getApiData.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, [city]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCity(searchInput);
    setSearchInput('');
  };

  return (
    <section className="container">
    <p className='project-name'>Weather-App</p>
      <div className="weather_header">
        <form className="weather_search" onSubmit={handleSearchSubmit}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="city-name"
            placeholder="search your city here..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
      </div>

      {weatherData.main && (
        <div className="weather_body">
          <h1 className="weather_city">
            {weatherData.name}, {getCountryName(weatherData.sys.country)}
          </h1>
          <p className="weather_date_time">{getDateTime(weatherData.dt)}</p>
          <div className="weather_data">
            <p className="weather_forecast">{weatherData.weather[0].description}</p>
            <div className="weather_icon">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                alt="weather icon"
              />
            </div>
          </div>
          <p className="weather_temperature">{weatherData.main.temp}&#176;</p>
          <div className="weather_minmax">
            <p className="weather_min">Min: {weatherData.main.temp_min.toFixed()}&#176;</p>
            <p className="weather_max">Max: {weatherData.main.temp_max.toFixed()}&#176;</p>
          </div>
        </div>
      )}

      {weatherData.main && (
        <section className="weather_info">
          <div className="weather-card">
            <i className="fa-solid fa-droplet"></i>
            <div>
              <p>Feels Like</p>
              <p className="weather_feelsLike">{weatherData.main.feels_like.toFixed(2)}&#176;</p>
            </div>
          </div>
          <div className="weather-card">
            <i className="fa-solid fa-droplet"></i>
            <div>
              <p>Humidity</p>
              <p className="weather_humidity">{weatherData.main.humidity}%</p>
            </div>
          </div>
          <div className="weather-card">
            <i className="fa-solid fa-wind"></i>
            <div>
              <p>Wind</p>
              <p className="weather_wind">{weatherData.wind.speed} m/s</p>
            </div>
          </div>
          <div className="weather-card">
            <i className="fa-solid fa-gauge-high"></i>
            <div>
              <p>Pressure</p>
              <p className="weather_pressure">{weatherData.main.pressure} hpa</p>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default Weather;
