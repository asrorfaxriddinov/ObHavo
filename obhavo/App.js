import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Text, Button, View, ImageBackground, TextInput } from 'react-native';
import styles from './style'; 

export default function App() {
  const [inputValue, setInputValue] = useState('');
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
  const handleButtonPress = () => {
    // İşlemleri burada gerçekleştirin
    console.log('Girilen değer:', inputValue);
  };
  return (
    <View style={styles.container}>
    
      <ImageBackground
        source={require('./assets/obhavo.jpg')}
        style={styles.background}>
        <Text style={styles.container1}>
        <Text style={styles.container2}>
         {"    "} OB HAVO
          </Text>
          {'\n'}
          MALUMOTLARI
        </Text>
        <View style={styles.fixed}>
        <Text style={styles.malumot}>
          Manzil Kiriting
        </Text>
        <TextInput
        style={styles.input}
     
        onChangeText={handleAddressChange}
        value={address}
        placeholder="Address"
      />
      <Button
        onPress={handlePress}
        title="Get Weather"
      />
      {weatherData && (
        <View style={styles.malumot01}>
          <Text style={styles.malumot1}>
          <Text style={styles.malumot1}> 🌦 {weatherData.name} da bugungi </Text> {'\n'} {"           "}<Text style={styles.malumot2}>ob-havo {Math.floor(weatherData.main.temp - 273.1)}ºC</Text>
          </Text>
          {/* Boshqa ma'lumotlar */}
        </View>
      )}
       
        </View>
        <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}


