import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Header from './components/Header';
import Search from './components/Search';
import WeatherItem from './components/Weather/WeatherItem';

function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('Amsterdam');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const fetchWeather = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=metric&key=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        setWeatherInfo(fetchWeather.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong');
      }
    };
    fetchWeather();
  }, [query]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Search setQuery={setQuery} />
      <WeatherItem weatherInfo={weatherInfo} />
      <ToastContainer />
    </>
  );
}

export default App;
