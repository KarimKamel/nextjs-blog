

export async function getStaticProps({ params }) {

    const { name } = params

    return {
        props: {
            name
        }
    }

}

export async function getStaticPaths() {

    // console.log("paths", paths);

    // return {
    //     paths,
    //     fallback: false
    // }
    return {
        paths: [
            { params: { name: ["1", "2"] } },
            { params: { name: ["1"] } },
            { params: { name: ["2", "2"] } }
        ],
        fallback: false
    }
}


export default function Name({ name }) {
    console.log(name);

    return (
        <>
            {/* {name.map(n => <p>{n}</p>)} */}
            {name && name.map(n => <p key={n}>{n}</p>)}
            <h1>names</h1>
        </>

    )

}