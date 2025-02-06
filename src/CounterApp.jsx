import React from 'react'
import { useState } from 'react'
import './CounterApp.css'
import Counter from './Counter'

const CounterApp = () => {
    const [CounterApp, setCounterApp] = useState({ intitial: 0 })

    function addvalue() {
        setCounterApp({ intitial: CounterApp.intitial + 1 })
    }
    function decresevalue() {
        if (CounterApp.intitial >= 0) {
            setCounterApp({ intitial: CounterApp.intitial - 1 })

        }
    }


    return (
        <div>
            <h2>Counter Value {CounterApp.intitial}</h2>
            <button onClick={addvalue}>Add Value</button>
            <br />
            <button onClick={decresevalue}>Decrease Value</button>
        </div>
    )
}

export default CounterApp
