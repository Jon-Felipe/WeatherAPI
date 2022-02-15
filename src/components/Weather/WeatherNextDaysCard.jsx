import React from 'react';

const WeatherNextDaysCard = ({ weatherInfo }) => {
  const updatedWeatherInfo = weatherInfo.days.slice(1, 6);
  return (
    <>
      <h1>Next 5 days</h1>
      {updatedWeatherInfo.map((item, index) => (
        <div className='weather-next-days__container'>
          <h1 className='weather-next-days__date'>{item.datetime}</h1>
          <img
            src={`../images/${item.icon}.png`}
            alt=''
            className='weather-next-days__icon'
          />
          <div className='row'>
            <p className='weather-next-days__temp-high'>
              {item.feelslikemax}&deg;C
            </p>
            <span>Low</span>
          </div>
          <div className='row'>
            <p className='weather-next-days__temp-low'>
              {item.feelslikemin}&deg;C
            </p>
            <span>High</span>
          </div>
          <div className='row'>
            <p className='weather-next-days__wind'>{item.windspeed}km/h</p>
            <span>Wind</span>
          </div>
          <div className='row'>
            <p className='weather-next-days__rain'>{item.precipprob}%</p>
            <span>Rain</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default WeatherNextDaysCard;
