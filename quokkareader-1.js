import fs, { readFileSync } from "fs"
import process from 'process';
const path = require("path")
const matter = require('gray-matter');
const postsDirectory = path.join(process.cwd(), "posts")



export function getAllPostsData() {
    const postsID = fs.readdirSync(postsDirectory)

    const postsData = postsID.map(id => {

        const data = matter(readFileSync(path.join(postsDirectory, id), "utf-8")).data
        const content = matter(readFileSync(path.join(postsDirectory, id), "utf-8")).content
        return {
            id: id.replace(/\.md$/, ""),
            ...data,
            content

        }

    })

    return postsData


}

export function getSinglePostData(id) {



    const data = matter(readFileSync(path.join(postsDirectory, `${id}.md`), "utf-8")).data
    const content = matter(readFileSync(path.join(postsDirectory, `${id}.md`), "utf-8")).content
    return {
        id,
        ...data,
        content
    }








}
// console.log(getAllPostsData());
// console.log(getSinglePostData("ssg-ssr"));