class Weather {
  constructor(city, country) {
    this.apiKey = '52b8928becb4da64366ca5d85aa6c23a';
    this.city = city;
    this.countryCode = countryCode;
  }

  // Fetch weather from API
  // Just by adding async means that this will return a promise
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}&units=metric`)

    const responseData = await response.json()
    console.log(responseData)
    return responseData
  }

  // Change Weather Location
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}