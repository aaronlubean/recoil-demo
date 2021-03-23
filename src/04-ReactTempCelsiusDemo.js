import React, { useState } from "react"

function TempCelsius() {
  const [tempF, setTempF] = useState(32)
  const [tempC, setTempC] = useState(0)

  const addTenCelsius = () => {
    setTempC((currC) => {
      const newC = currC + 10
      setTempF((newC * 9) / 5 + 32)
      return newC
    })
  }
  const addTenFahrenheit = () => {
    setTempF((currF) => {
      const newF = currF + 10
      setTempC((newF - 32) * 5 / 9)
      return newF
    })
    
  }
  const reset = () => {
    setTempF(32)
    setTempC(0)
  }

  return (
    <>
      <h2>React Temperature Conversion</h2>
      <h3>Temp (Celsius): {tempC}<br/>Temp (Fahrenheit): {tempF}</h3>
      <button onClick={addTenCelsius}>Add 10 Celsius</button>
      <br />
      <br />
      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default function ReactTempCelsiusDemo() {
    return <TempCelsius/>
}