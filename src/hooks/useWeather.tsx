
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { WeatherServiceLocation, WeatherServiceTemperature } from "../services/api";

interface WeatherContext {
  city: string;
  state: string;
  temperatureMax: number;
  temperatureMin: number;
}

interface cordenadasprops {
  latitude: number;
  longitude: number;
}

const Weather = createContext<WeatherContext>({} as WeatherContext)
interface WeatherContextProps {
  children: ReactNode
}

export function WeaterContext({ children }: WeatherContextProps) {
  const [dataApis, setDataApis] = useState<WeatherContext>({} as WeatherContext)
  const { city, temperatureMax, temperatureMin, state } = dataApis

  async function test(data1: number, data2: number) {

    const city = await WeatherServiceLocation.get(`point?geocode=${data1.toFixed(2)},${data2.toFixed(2)}&language=en-US&format=json&apiKey=e0ae7246213842fcae72462138d2fcd6`)

    const temperature = await WeatherServiceTemperature.get(`daily/5day?geocode=${data1.toFixed(2)},${data2.toFixed(2)}&format=json&units=e&language=pt-BR&apiKey=e0ae7246213842fcae72462138d2fcd6`)

    setDataApis({
      city: city.data.location.city,
      state: city.data.location.adminDistrict,
      temperatureMax: (temperature.data.calendarDayTemperatureMax[0] - 32) / 1.8,
      temperatureMin: (temperature.data.calendarDayTemperatureMin[0] - 32) / 1.8
    })


  }

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(function (position) {


      test(position.coords.latitude, position.coords.longitude)




    })


  }, [])


  return (
    <Weather.Provider value={{ city, temperatureMax, temperatureMin, state }} >
      {children}
    </Weather.Provider >
  )
}

export function useWeather() {
  return useContext(Weather)
}