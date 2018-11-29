import React, { Suspense, useState } from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import { fetchWeather } from '../../API'

const WeatherResource = createResource(fetchWeather)

const CurrentWeather = () => {
  const [city] = useState('Tokyo')

  return (
    <div>
      <h1>Current Weather of {city}</h1>
      <Suspense fallback={'loading'} maxDuration={1000}>
        <CurrentWeatherContent />
      </Suspense>
    </div>
  )
}

const CurrentWeatherContent = () => {
  return WeatherResource.read().map(({ id, currentWeather }) => (
    <div key={id}>
      {id}: {currentWeather}
    </div>
  ))
}

export default CurrentWeather
