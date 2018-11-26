import React, { useState, useEffect } from 'react'
import { fetchWeather } from '../../API'

const CurrentWeather = () => {
  const [city] = useState('Tokyo')
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    fetchWeather().then(data => {
      setWeather(data)
    })
  }, city)

  return (
    <div>
      <h1>Current Weather of {city}</h1>
      <p>{JSON.stringify(weather)}</p>
    </div>
  )
}

export default CurrentWeather
