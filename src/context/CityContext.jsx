
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
                setCityDailyWeatherData(result.data.daily)
                setCityTimeZone(result.data.timezone)
            })
            .catch(err => console.log(err))
    }, [latAndLon])

    const values = {
        cityName,
        setCityName,
        cityWeatherData,
        apiError,
        cityTimeZone
    }

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}

export const useCity = () => useContext(CityContext);