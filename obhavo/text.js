import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [address, setAddress] = useState('');
  const APIKey = '9e615b6da049a7c16ce8bcbfde6264f0';

  const handleAddressChange = (text) => {
    setAddress(text);
  };

  const handlePress = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${APIKey}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
        onChangeText={handleAddressChange}
        value={address}
        placeholder="Address"
      />
      <Button
        onPress={handlePress}
        title="Get Weather"
      />
      {weatherData && (
        <View>
          <Text>
            🌦 {weatherData.name} da bugungi ob-havo {Math.floor(weatherData.main.temp - 273.1)}ºC
          </Text>
          {/* Boshqa ma'lumotlar */}
        </View>
      )}
    </View>
  );
};

export default WeatherComponent;
