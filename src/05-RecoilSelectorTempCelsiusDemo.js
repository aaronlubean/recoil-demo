import {atom, selector, useRecoilState, useResetRecoilState, DefaultValue, RecoilRoot} from 'recoil';

const fTempAtom = atom({
  key: 'fahrenheit',
  default: 32,
})

const cTempSelector = selector({
  key: 'celsius',
  get: ({get}) => ((get(fTempAtom) - 32) * 5) / 9,
  set: ({set}, newValue) =>
    set(
      fTempAtom,
      newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32
    ),
})

function TempCelsius() {
  const [tempF, setTempF] = useRecoilState(fTempAtom)
  const [tempC, setTempC] = useRecoilState(cTempSelector)
  const resetTemp = useResetRecoilState(cTempSelector)

  const addTenCelsius = () => setTempC(tempC + 10)
  const addTenFahrenheit = () => setTempF(tempF + 10)
  const reset = () => resetTemp();

  return (
    <>
      <h2>Recoil Selector Temperature Conversion</h2>
      <h3>Temp (Celsius): {tempC}<br/>Temp (Fahrenheit): {tempF}</h3>
      <button onClick={addTenCelsius}>Add 10 Celsius</button>
      <br />
      <br />
      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default function RecoilSelectorTempCelsiusDemo() {
    return (
      <RecoilRoot>
        <TempCelsius/>
      </RecoilRoot>
    )
}