import React from 'react'
import data from './feature.js'

function Feature() {
  console.log(data); // always good while learning

  return (
    <div>
      <h1>Feature Component</h1>

      <h2>
        {data.feature.id} : {data.feature.name}
      </h2>

      <h3>Array Data:</h3>
      {data.array.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default Feature
