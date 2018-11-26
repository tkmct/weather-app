export const fetchWeather = () => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London&APIID=${
      process.env.API_KEY
    }`
  )
    .then(res => res.json())
    .then(data => data)
}
