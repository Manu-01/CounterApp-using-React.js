import React from 'react'
import ComponentC from './ComponentC'
import { useContext } from 'react'
import { UserContext } from './ComponentA'

const ComponentB = () => {
    const user = useContext(UserContext)
    return (
        <div className='box'>
            <h1>B</h1>
            <h2>{`helloo ${user}`}</h2>
            <ComponentC />
        </div>
    )
}

export default ComponentB
