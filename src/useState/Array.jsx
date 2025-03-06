import React from 'react'
import { useState } from 'react'

const Array = () => {
    const [Items, setItems] = useState([])

    const addItem = () => {
        setItems([...Items, {
            id: Items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {Items.map(item => (
                    <li key={item.id}>{item.value}</li>

                ))}
            </ul>

        </div>
    )
}

export default Array
