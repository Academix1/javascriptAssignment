/*if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}*/


/*const weatherEndpoints = ['current', 'forecast','alerts'];

  console.log(weatherEndpoints);*/

  function filterHotDays(temperatures) {
    // Use the filter method to return only temperatures that are 30 or higher
    return temperatures.filter(temp => temp = 30);
  }
  
  const temps = [28, 32, 30, 25, 35];
  console.log(filterHotDays(temps));



