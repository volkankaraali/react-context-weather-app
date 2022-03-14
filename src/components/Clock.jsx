
import React from 'react'
import { useEffect, useState } from 'react';
import { useCity } from '../context/CityContext';

function Clock() {
    const { cityTimeZone, } = useCity();

    const [currentTime, setCurrentTime] = useState("")

    //when citytimezone changes timer will restart by new citytimezone
    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: `${cityTimeZone}` })
            setCurrentTime(date)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [cityTimeZone])


    return (
        <>
            {currentTime}
        </>
    )
}

export default Clock