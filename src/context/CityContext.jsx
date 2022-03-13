
import { createContext, useContext, useEffect, useState } from "react";
import WeatherService from "../services/weatherService";

const CityContext = createContext();

export const CityProvider = ({ children }) => {

    const [cityName, setCityName] = useState("istanbul")
    const [apiError, setApiErrorMes] = useState(false)
    const [latAndLon, setLanAndLon] = useState({
        lat: 41.0351,
        lon: 28.9833
    })

    //city current weather data
    const [currentCityWeather, setCurrentCityWeather] = useState()
    //8 days weather date(first item current date)
    const [cityWeatherData, setCityDailyWeatherData] = useState([])
    const [cityTimeZone, setCityTimeZone] = useState("Europe/Istanbul")


    useEffect(() => {
        let weatherService = new WeatherService()
        weatherService.getCityLatAndLon(cityName).then(result => {
            setApiErrorMes(false)
            //gets the first city returned from the request
            let cityLatAndLon = result.data[0]

            setLanAndLon({ lat: cityLatAndLon?.lat, lon: cityLatAndLon?.lon })

        })
            .catch(err => {
                console.log(err)
                setApiErrorMes(true)
            })

    }, [cityName])

    useEffect(() => {
        let weatherService = new WeatherService()
        weatherService.getWeeklyWeatherOfCityByLatAndLon(latAndLon.lat, latAndLon.lon)
            .then(result => {
                //console.log(typeof result.data.current)
                setCityDailyWeatherData(result.data.daily)
                setCurrentCityWeather(result.data.current)
                setCityTimeZone(result.data.timezone)
            })
            .catch(err => {
                console.log(err)
                setApiErrorMes(true)
            })
    }, [latAndLon])

    const values = {
        cityName,
        setCityName,
        cityWeatherData,
        apiError,
        cityTimeZone,
        currentCityWeather
    }

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}

export const useCity = () => useContext(CityContext);