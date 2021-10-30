import React from 'react'
import { useCity } from "../context/CityContext"
import Select from 'react-select'
function Cities() {

    const { setCityName } = useCity();
    
    const options = [
        { value: 'ankara', label: 'Ankara' },
        { value: 'Antalya', label: 'Antalya' },
        { value: 'istanbul', label: 'Istanbul' },
        { value: 'izmir', label: 'Izmir' },
        { value: 'trabzon', label: 'Trabzon' },
      ]


    return (
        <div className="container mx-7  sm:mx-auto my-5">
            <Select className="w-48" options={options} defaultValue={{ value: 'istanbul', label: 'Istanbul' }} onChange={e => setCityName(e.value)} />
        </div>
    )
}

export default Cities
