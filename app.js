// Init storage
const storage = new Storage();

// Get Stored Location data
const weatherLocation = storage.getLocationData();

// Init weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.countryCode);

// Init ui
const ui = new UI();

// getWeather when the DOM Loads
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('countryCode').value;

  // Change Location
  weather.changeLocation(city, countryCode);

  // Set Location in Local Storage
  storage.setLocationData(city, countryCode);

  // Once we Change Location we have to get the weather again, fetch it with this new Location and repaint the UI

  // Get and Display Weather
  getWeather();

  // Close Modal
  // Jquery
  $('#locModal').modal('hide')
})

// This is going to return a promise because getWeather is async
// So we need to treat it like a promise and use .then and .catch
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      // console.log(results);

      // Instead of logging the results here we want to call an UI method that will 'paint'  the screen
      ui.paint(results);
    })
    .catch(err => console.log(err));
}