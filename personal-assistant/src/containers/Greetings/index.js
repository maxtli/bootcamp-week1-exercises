import React, {
  useState, useEffect,
} from 'react'
import { TitleStrip } from '../../styles'

export default () => {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    const fetchData = () => {
      navigator.geolocation.getCurrentPosition(async p => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${p.coords.latitude}&lon=${p.coords.longitude}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
        const data = await res.json()
        setWeather(data)
      })
    }
    fetchData()
  }, [])
  return (
    <>
      <TitleStrip>
        Welcome to Your Personal Assistant
      </TitleStrip>
      <br />
      Your location coordinates are:
      <br />
      Latitude:
      {weather ? weather.coord.lat : 'N/A'}
      <br />
      Longitude:
      {weather ? weather.coord.lon : 'N/A'}
      <br />
      <b>
Today&apos;s weather is
        {weather ? weather.weather[0].main : 'N/A'}
      </b>
      <br />
      The temperature is
      {weather ? weather.main.temp : 'N/A'}
    </>
  )
}
