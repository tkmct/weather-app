import React, { useState } from 'react'

const CurrentWeather = () => {
  const [city] = useState('Tokyo')

  return (
    <div>
      <h1>Current Weather of {city}</h1>
    </div>
  )
}

export default CurrentWeather
