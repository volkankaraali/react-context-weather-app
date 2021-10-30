import axios from "axios"


export const apiKey="9add691b6641cfa2a60059fc1f132c8f";
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