import { useCity } from '../context/CityContext';
import rain from '../images/rain.png'
import cloudy from '../images/cloudy.png'
import sunny from '../images/sunny.png'
import snow from '../images/snow.png'
import fog from '../images/fog.png'

function WeeklyWeather() {

    const { cityData,fullcityData } = useCity();


    const sevenDay= fullcityData.daily?.slice(1,8)
    //console.log(sevenDay);
    return (
        <>
            {

                sevenDay?.map((day, i) => {
                    let date = new Date(day.dt * 1000)

                    return (
                        <div key={i} className="flex flex-row md:flex-col h-14 justify-evenly">
                            <img className="w-12 h-12 my-auto md:mx-auto"
                                src={
                                    (day.weather[0].main === "Clouds") ? cloudy : (day.weather[0].main === "Rain") ? rain : (day.weather[0].main === "Clear") ? sunny :
                                        (day.weather[0].main === "Snow") ? snow :  (day.weather[0].main === "Fog") ? fog : false
                                }
                                alt={day.weather[0].main}

                            />
                            <h3 className="my-auto text-md sm:text-sm">{date.toLocaleDateString('default', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</h3>
                            <h3 className="my-auto text-md sm:text-sm">{day.temp.day} C</h3>
                        </div>
                    )
                })
            }
        </>
    )
}

export default WeeklyWeather