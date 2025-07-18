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
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto shadow-lg text-center">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-primary">
            Weather Feature
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center p-8 text-muted-foreground">
          <p>The weather feature requires API access and is not available in this static deployment.</p>
          <p className="mt-2">Please visit the development version for full functionality.</p>
        </CardContent>
      </Card>
    </div>
  );
}
