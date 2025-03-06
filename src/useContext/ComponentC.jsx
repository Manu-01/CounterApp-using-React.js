import React from 'react'
import ComponentD from './ComponentD'
import { useContext } from 'react'
import { UserContext } from './ComponentA'

const ComponentC = () => {
    const user = useContext(UserContext)

    return (
        <div className='box'>
            <h1>C</h1>
            <h2>{`hello again ${user}`}</h2>
            <ComponentD />
        </div>
    )
}

export default ComponentC
