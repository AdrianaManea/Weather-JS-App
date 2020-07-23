class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.description = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.pressure = document.getElementById('w-pressure');
    this.feelsLike = document.getElementById('w-feels-like')
    this.wind = document.getElementById('w-wind')
  }
  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.description.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp + '°C';
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}°C`
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} mph`
  }
}