import React from 'react';

const WeatherTodayCard = ({ weatherInfo }) => {
  let newWeatherInfoData = weatherInfo.days[0].hours.filter(
    (_, index) => index % 3 === 0
  );
  return (
    <>
      <h1 className='weather-today-heading'>Todays weather</h1>
      <div className='weather-today__container'>
        {newWeatherInfoData.map((item, index) => (
          <div key={index} className='weather-today__card'>
            <p>{item.datetime.substring(0, 5)}</p>
            <img src={`../images/${item.icon}.png`} alt='weather icon' />
            <p>{item.temp}&deg;C</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeatherTodayCard;
