import React, { useState } from 'react'

export default () => {
  const city = useState('Tokyo')

  return (
    <div>
      <h1>Current Weather of {city}</h1>
    </div>
  )
}
