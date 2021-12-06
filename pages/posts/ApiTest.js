import React from 'react'
import { useEffect, useState } from "react"

async function fetchName() {
    console.log("fetching...");
    const response = await fetch("/api/myNameIs")
    const data = await response.json()
    return data

}

export default function ApiTest() {
    const [name, setName] = useState("")


    useEffect(() => {
        async function getName() {

            name = await fetchName()
            setName(name)

        }
        getName()

    }, []
    )
    return (
        <div>
            <h1>My name page</h1>
            {name && <h1>{name.name}</h1>}
        </div>
    )
}
