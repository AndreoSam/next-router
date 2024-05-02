"use client"
import { useState } from "react"

const Features = () => {
    let [data, setData] = useState("Hi")
    console.log(data);
    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}

export default Features