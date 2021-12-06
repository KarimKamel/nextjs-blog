import React from 'react'

// const params = { id: "1" }
// const context = { params }

// const contexts = [
//     { params: { id: "1" } },
//     { params: { id: "2" } },

// ]

export async function getServerSideProps(params) {
    const res = await fetch(`https://reqres.in/api/users/${params.params.id}`)
    const data = await res.json()
    console.log(data);

    const { data: props } = data
    if (props) {
        return {
            props
        }
    }
    else {
        return {
            notFound: true,
        }
    }





}

export default function ssr(props) {
    console.log("props", props);
    const { email, id, avatar } = props

    return (
        <div>
            <h2>{email}</h2>
            <h2>{id}</h2>
            <img src={avatar}></img>


        </div>
    )
}

