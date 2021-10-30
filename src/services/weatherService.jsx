import axios from "axios"
import {apiKey} from "./Apikey"


export default class WeatherService{

    getCityLatAndLon(cityName){
        let apiurl=`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`
        return axios.get(apiurl)
    }

    getWeeklyWeatherOfCityByLatAndLon(lat,lon){
        let apiurl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        return axios.get(apiurl)
    }
}