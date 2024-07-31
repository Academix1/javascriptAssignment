function simplifyWeatherData(data) {
  return {
    temp: data.temperature,
    humid: data.humidity,
  };
}

const weatherData = { temperature: 25, humidity: 70 };
console.log(simplifyWeatherData(weatherData));
