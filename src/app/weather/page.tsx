"use client";

import { useState, useEffect } from 'react';

interface WeatherData {
  request: {
    type: string;
    query: string;
    language: string;
    unit: string;
  };
  location: {
    name: string;
    country: string;
    region: string;
    lat: string;
    lon: string;
    timezone_id: string;
  };
  weather: {
    description: string;
  }[];
  current: {
    temperature: number;
    weather_descriptions: string[];
    wind_speed: number;
  };
}

export default function WeatherPage() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const API_ENDPOINT = `https://api.weatherstack.com/current?access_key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&query=${latitude},${longitude}`; // Replace with your actual API endpoint
          console.log(latitude, longitude,'test')
          try {
            const response = await fetch(API_ENDPOINT); // Example with metric units
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: WeatherData = await response.json();
            setWeather(data);

          } catch (err) {
            setError("Failed to fetch weather data.");
            console.error("Weather API error:", err);
          } finally {
            setLoading(false);
          }
        },
        (err) => {
          setError("Geolocation permission denied or failed.");
          console.error("Geolocation error:", err);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!weather) {
    return <div>No weather data available.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Current Weather in {weather.location.name}</h1>
      <div className="bg-card p-6 rounded-lg shadow-md">
        <p className="text-xl">Temperature: {weather.current.temperature}°C</p>
        <p className="text-lg">Description: {weather.current.weather_descriptions[0]}</p>
        <p className="text-lg">Wind Speed: {weather.current.wind_speed} km/h</p>
      </div>
    </div>
  );
}