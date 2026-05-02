<script setup>
import { ref, watchEffect } from 'vue';

const city = ref('United States');
const weatherData = ref(null);
const loading = ref(false);
const error = ref('');

const fetchWeather = async (cityName) => {
  try {
    loading.value = true;
    error.value = '';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=693b8135b7b344e3b48131206241206&q=${cityName}`);
    const data = await response.json();
    if (response.ok) {
      weatherData.value = data.current;
    } else {
      weatherData.value = null;
      error.value = data.error.message;
    }
  } catch (err) {
    weatherData.value = null;
    error.value = 'Error fetching weather data.';
  } finally {
    loading.value = false;
  }
};

watchEffect(() => {
  if (city.value) {
    fetchWeather(city.value);
  } else {
    weatherData.value = null;
  }
});
</script>

<template>
  <div class="content">
    <h1>Weather Dashboard</h1>
    <label>
      City:
      <input v-model="city" placeholder="Enter city name" />
    </label>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="weatherData && !loading && !error">
      <h2>Weather in {{ city }}</h2>
      <p>Temperature: {{ weatherData.temp_c }}°C</p>
      <p>Conditions: {{ weatherData.condition.text }}</p>
      <img :src="weatherData.condition.icon" alt="weather icon" />
    </div>
    <p v-else>No weather data available.</p>
  </div>
</template>

<style scoped>
label {
  display: block;
  margin: 20px 0;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

h2 {
  margin-top: 20px;
}

p {
  font-size: 18px;
}

img {
  margin-top: 10px;
}
</style>