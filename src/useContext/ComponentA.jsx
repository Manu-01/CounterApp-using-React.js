import React, { useState } from 'react'
import './context.css/'
import ComponentB from './ComponentB'
import { createContext } from 'react'



export const UserContext = createContext();
const ComponentA = () => {

    const [user, setUser] = useState("Manu")
    return (
        <div className='box'>
            <h1>A</h1>
            <h2>{`Hello${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>

        </div>
    )
}

export default ComponentA
