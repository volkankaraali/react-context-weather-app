import rain from '../images/rain.png'
import cloudy from '../images/cloudy.png'
import sunny from '../images/sunny.png'
import snow from '../images/snow.png'
import fog from '../images/fog.png'
import { useCity } from "../context/CityContext"
import WeeklyWeather from './WeeklyWeather';

function CurrentWeather() {

    const { cityData, cityName, apiError } = useCity();

    let date = new Date(cityData[0]?.dt * 1000)

    return (
        <>
            {
                apiError ?  <div className="bg-red-500 flex flex-wrap content-center text-gray-100 justify-center h-10 rounded-lg w-1/2 container mx-auto text-center text-sm font-bold mt-4 mb-2">Wrong City Name!</div> 
                
                :
            
                <div className="shadow-xl grid grid-cols-1 lg:grid-cols-3 h-full lg:h-48 w-80 sm:w-full container mx-auto ">
                <div className="bg-yellow-200 sm:rounded-l-lg flex flex-wrap content-center pb-3 md:pb-1">
                    <div className="grid grid-cols-3 mx-auto">
                        <div className="col-span-1 my-auto">
                            <img className="w-28 h-28 p-2" src={
                                (cityData[0]?.weather[0]?.main === "Clouds") ? cloudy : (cityData[0]?.weather[0]?.main === "Rain") ? rain : (cityData[0]?.weather[0]?.main === "Clear") ? sunny :
                                    (cityData[0]?.weather[0]?.main === "Snow") ? snow : (cityData[0]?.weather[0]?.main === "Fog") ? fog :false
                            } alt=""
                            />
                        </div>
                        <div className="col-span-2 px-2 text-center md:text-left">
                            <h4 className="text-sm font-bold mt-4 mb-2">City: {cityName.toLocaleUpperCase()}</h4>
                            <h3 className="text-base tracking-tighter mb-2 font-bold">{date.toLocaleDateString('default', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</h3>
                            <h4 className="text-sm font-bold">Temp {cityData[0]?.temp?.day} C</h4>
                            <h4 className="text-sm font-light">Felt Temp : {cityData[0]?.feels_like?.day} C</h4>
                            <h4 className="text-sm font-light">Max Temp : {cityData[0]?.temp?.max} C</h4>
                            <h4 className="text-sm font-light">Min Temp : {cityData[0]?.temp?.min} C</h4>
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
