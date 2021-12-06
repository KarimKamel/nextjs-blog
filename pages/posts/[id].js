
import { getAllPostsData, getSinglePostData } from "../../lib/reader"
import Layout from "../../components/Layout"
import Head from "next/head"
import { remark } from "remark"
import html from 'remark-html'
import Date from "../../components/Date"

export async function getStaticProps({ params }) {
    console.log("params", params);
    const matterResult = getSinglePostData(params.id)
    // console.log(matterResult);
    const formattedResults = await remark().use(html).process(matterResult.content)
    const contentHtml = formattedResults.toString()
    // console.log(contentHtml);
    const postData = { id: params.id, contentHtml, ...matterResult.data }
    console.log(postData);
    // console.log("postData", postData);

    return {
        props: {
            postData
        }
    }

}

export async function getStaticPaths() {
    const fileNames = getAllPostsData()
    const paths = fileNames.map(file => {
        // console.log(file);
        return { params: { id: file.id } }
    })
    // console.log("paths", paths);

    return {
        paths,
        fallback: false
    }
    // return {
    //     paths: [
    //         { params: { id: '1', text: "test1" } },
    //         { params: { id: '2', text: "test2" } }
    //     ],
    //     fallback: true
    // }
}


export default function Post({ postData }) {
    console.log(postData);

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h2>{postData.title}</h2>
            <h2>{postData.date}</h2>

            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <Date dateString={postData.date} />
        </Layout>
    )

}