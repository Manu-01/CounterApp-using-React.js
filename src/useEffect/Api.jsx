
import { useState, useEffect } from "react";
import axios from 'axios';

const Api = () => {

    const [apiData, setapiData] = useState([])

    // const Api = 'https://jsonplaceholder.typicode.com/posts'
    // useEffect(() => {
    //     console.log("api called")
    //     fetch(Api)
    //         .then((res) => res.json())
    //         .then((data) => setapiData(data))
    //         .catch((Error) => console.log(Error))
    // }, [])

    useEffect(() => {
        console.log("api called")
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => setapiData(res.data))
            .catch((Error) => console.log(Error))
    }, [])



    return (
        <>
            <ul className="bg-blue-500" >
                {apiData.map((curr) => {
                    return <li key={curr.id}>{curr.title}</li>
                })}
            </ul>
        </>
    )
}
export default Api