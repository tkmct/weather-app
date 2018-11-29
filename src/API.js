export const fetchWeather = () => {
  return fetch('http://localhost:3001/weather')
    .then(res => res.json())
    .then(data => data)
}
