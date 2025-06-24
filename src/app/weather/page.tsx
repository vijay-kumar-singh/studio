"use client";

import { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
          const API_ENDPOINT = `https://api.weatherstack.com/current?access_key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&query=${latitude},${longitude}`;

          try {
            const response = await fetch(API_ENDPOINT);
            const data = await response.json();

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            if (data.error) {
              setError(data.error.info || "An error occurred while fetching weather data.");
            } else {
              setWeather(data);
            }
          } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to fetch weather data.";
            setError(message);
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
    return (
      <div className="flex justify-center items-center h-full">
        <p>Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error Fetching Weather</AlertTitle>
          <AlertDescription>
            {error}
            <p className="mt-2 text-sm">Please ensure the Weather API key is set correctly in your environment variables and that location services are enabled.</p>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>No weather data available.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-primary">
            Weather in {weather.location.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-6xl font-bold">{weather.current.temperature}°C</p>
          <p className="text-xl text-muted-foreground">{weather.current.weather_descriptions[0]}</p>
          <p className="text-lg">Wind Speed: {weather.current.wind_speed} km/h</p>
        </CardContent>
      </Card>
    </div>
  );
}
