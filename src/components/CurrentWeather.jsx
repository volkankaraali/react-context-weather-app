import rain from '../images/rain.png'
import cloudy from '../images/cloudy.png'
import sunny from '../images/sunny.png'
import snow from '../images/snow.png'
import fog from '../images/fog.png'
import clock from "../images/clock-icon.png"

import { useCity } from "../context/CityContext"
import WeeklyWeather from './WeeklyWeather';
import Clock from './Clock'
import ReactCountryFlag from 'react-country-flag'


function CurrentWeather() {

    const { cityWeatherData, cityCountry, currentCityWeather, cityName, apiError } = useCity();



    //convert epoch/unix time
    let date = new Date(cityWeatherData[0]?.dt * 1000)
    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }


    return (
        <>

            {
                apiError ? <div className="bg-red-500 flex flex-wrap content-center text-gray-100 justify-center h-10 rounded-lg w-1/2 container mx-auto text-center text-sm font-bold mt-4 mb-2">Wrong City Name!</div>

                    :

                    <div className="shadow-xl grid grid-cols-1 lg:grid-cols-3 h-full lg:h-48 w-80 sm:w-full container mx-auto ">
                        <div className="bg-yellow-200 sm:rounded-l-lg flex flex-wrap content-center py-3 md:pb-1">
                            <div className="grid grid-cols-4 mx-auto px-2 ">
                                <div className="col-span-1 my-auto">
                                    <img className="w-20 h-20 p-2" src={
                                        (currentCityWeather?.weather[0]?.main === "Clouds") ? cloudy : (currentCityWeather?.weather[0]?.main === "Rain") ? rain : (currentCityWeather?.weather[0]?.main === "Clear") ? sunny :
                                            (currentCityWeather?.weather[0]?.main === "Snow") ? snow : (currentCityWeather?.weather[0]?.main === "Fog" || currentCityWeather?.weather[0]?.main === "Mist") ? fog : ""
                                    } alt={currentCityWeather?.weather[0]?.main}
                                    />

                                </div>
                                <div className="col-span-2 px-2 text-center md:text-left">
                                    <div className='flex items-center mb-2'>
                                        <h4 className="text-sm font-bold ">City: {cityName.toLocaleUpperCase()}</h4>
                                        <ReactCountryFlag style={{ width: '20px', height: '20px', marginLeft: "5px" }} countryCode={`${cityCountry}`} svg />
                                    </div>
                                    <h3 className="text-base tracking-tighter mb-2 font-bold">{date.toLocaleDateString(undefined, dateOptions)}</h3>
                                    <h4 className="text-sm font-bold">Temp {Math.round(currentCityWeather?.temp)} °C</h4>
                                    <h4 className="text-sm font-light">Felt Temp : {Math.round(currentCityWeather?.feels_like)} °C</h4>
                                </div>
                                <div className='col-span-1 flex flex-col self-center items-center'>
                                    <img className='w-6 h-6' src={clock} alt="clock" />
                                    <h4 className='text-xs font-bold'> {<Clock />}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-100 sm:rounded-r-lg col-span-2 px-2">
                            <div className="grid grid-rows-1 md:grid-flow-col text-center md:my-14">

                                <WeeklyWeather></WeeklyWeather>
                            </div>
                        </div>
                    </div>



            }

        </>

    )
}

export default CurrentWeather
