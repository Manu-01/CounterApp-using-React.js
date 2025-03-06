import react from 'react'
import { useState, useEffect } from 'react'

function First() {
    const [count, setCount] = useState(0)
    const [date, setDate] = useState(0)
    useEffect(() => {
        //date
        const cleardate = setInterval(() => {
            const updateedDate = new Date();
            setDate(updateedDate.toLocaleTimeString());
        }, 1000)
        return (() => {
            clearInterval(cleardate)
        })
        // counter app
        console.log("count: ", count)

    }, [count]);





    return (
        <>
            <h1 style={{ textAlign: 'center' }}>useEffect</h1>
            <button onClick={() => { setCount(count + 1) }}>count:{count}</button >
            <button onClick={() => { setCount(count - 1) }}>substract</button>
            <button onClick={() => { setCount(0) }}>reset</button>
            <p onChange={setDate} style={{ textAlign: "center" }}>Date: {date}</p>
        </>
    )
}
export default First;


// useEffect always use a callback funtion and inside a call back function we cleanup function along with dependency array []).
// useEffect hook called after every single render
// What is the difference between useEffect(() => {}, []) and useEffect(() => {}, [someState])?
// useEffect(() => {}, []): Runs only once when the component mounts (like componentDidMount).
// useEffect(() => {}, [someState]): Runs when the component mounts and whenever someState changes (like componentDidUpdate).