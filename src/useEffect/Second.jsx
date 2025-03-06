import React from 'react'
import { useState, useEffect } from 'react'

const Second = () => {
    const [Dated, setDated] = useState()
    useEffect(() => {
        setInterval(() => {
            const Dated = new Date();
            setDated(Dated.toLocaleTimeString())
        }, 1000)
    }, [])

    return (
        <div>
            <p onChange={setDated} style={{ textAlign: "center", fontSize: "larger" }} className='bg-green-400 text-8xl text-amber-50 '>DATE :{Dated} </p>
        </div>
    )
}

export default Second

