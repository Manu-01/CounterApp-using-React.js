import React from 'react'
import { useState } from 'react'
import './CounterApp.css'

function State() {
    const [State, setState] = useState({ intitial: 0 })
    function addvalue() {
        setState({ intitial: State.intitial + 1 })
    }
    function decresevalue() {
        if (State.intitial > 0) {
            setState({ intitial: State.intitial - 1 })
        }
    }
    function reset() {
        setState({ intitial: 0 })
    }
    return (
        <div>
            <div className='counter'>
                <h1>COUNTER APP </h1>
                <button onClick={addvalue}> + </button>
                <button> {State.intitial} </button>
                <button onClick={decresevalue}> - </button>
                <br />
                <button className='reset' onClick={reset}> reset </button>
            </div>
        </div>
    )
}

export default State