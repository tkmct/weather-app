export const fetchWeather = () => {
  fetch(
    `api.openweathermap.org/data/2.5/weather?q=London&apiid=${
      process.env.API_ID
    }`
  )
    .then(res => res.json())
    .then(data => data)
}
