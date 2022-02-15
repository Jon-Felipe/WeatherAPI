import React from 'react';

// components
import WeatherTodayCard from './WeatherTodayCard';
import WeatherNextDaysCard from './WeatherNextDaysCard';

const WeatherItem = ({ weatherInfo }) => {
  return (
    <article className='weather container'>
      <div className='weather__place'>
        <h3>{weatherInfo.resolvedAddress}</h3>
        <p>{new Date().toDateString()}</p>
      </div>
      <div className='weather__details'>
        <div className='weather__now'>
          <img
            src={`../images/${weatherInfo.currentConditions.icon}.png`}
            alt='weather icon'
            className='weather__icon'
          />
          <div className='weather__temp'>
            <h1 className='weather__temp-heading'>
              {weatherInfo.currentConditions.temp}&deg;C
            </h1>
            <h3 className='weather__temp-description'>
              {weatherInfo.currentConditions.conditions}
            </h3>
          </div>
        </div>
        <div className='weather__now-summary'>
          <div className='weather__now-info'>
            <p>{weatherInfo.days[0].tempmax}&deg;C</p>
            <span>High</span>
          </div>
          <div className='weather__now-info'>
            <p>{weatherInfo.days[0].tempmin}&deg;C</p>
            <span>Low</span>
          </div>
          <div className='weather__now-info'>
            <p>{weatherInfo.currentConditions.humidity}%</p>
            <span>Humidity</span>
          </div>
          <div className='weather__now-info'>
            <p>{weatherInfo.currentConditions.windspeed}km/h</p>
            <span>Wind Speed</span>
          </div>
          <div className='weather__now-info'>
            <p>{weatherInfo.currentConditions.sunrise}</p>
            <span>Sunrise</span>
          </div>
          <div className='weather__now-info'>
            <p>{weatherInfo.currentConditions.sunset}</p>
            <span>Sunset</span>
          </div>
        </div>
      </div>

      <WeatherTodayCard weatherInfo={weatherInfo} />

      <WeatherNextDaysCard weatherInfo={weatherInfo} />
    </article>
  );
};

export default WeatherItem;
