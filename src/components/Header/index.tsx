import { IonLocationSharp } from "../../assets/icons/location";
import { FluentWeatherSunny16Filled } from "../../assets/icons/sunny";
import { useWeather } from "../../hooks/useWeather";

export function Header() {

  const { city, state, temperatureMax, temperatureMin } = useWeather()

  const min = parseInt(String(temperatureMin))
  return (
    <>
      <header className='w-full max-w-5xl h-12 m-auto flex justify-center items-center gap-10'>

        <div className='pt-4 flex gap-4 items-center group'>
          <IonLocationSharp
            color="red"
            className="w-10 h-10 group-hover:animate-bounce"
          />

          <h2 className="text-xl font-semibold group">{city} - {state}</h2>
        </div>
        <div className='pt-4 flex gap-4 items-center'>
          <FluentWeatherSunny16Filled
            color="orange"
            className="w-10 h-10 animate-spin-slow "
          />

          <h2 className="text-xl font-semibold">MIN: {min} Cº | Max: {parseInt(String(temperatureMax))} Cº </h2>
        </div>
      </header>
    </>
  )
}