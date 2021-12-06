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



    const data = matter(readFileSync(path.join(postsDirectory, `${id}.md`), "utf-8"))

    return data

}
// export function getSinglePostData(id) {



//     const data = matter(readFileSync(path.join(postsDirectory, `${id}.md`), "utf-8")).data
//     const content = matter(readFileSync(path.join(postsDirectory, `${id}.md`), "utf-8")).content

//     return {
//         id,
//         ...data,
//         content
//     }

// }



















// export function readFile() {


//     const fileList = fs.readdirSync(_path)

//     const data = fileList.map(file => {
//         const result = {}
//         const data = matter(fs.readFileSync(path.join(_path, file), "utf-8")).data
//         const content = matter(fs.readFileSync(path.join(_path, file), "utf-8")).content

//         return { ...data, content }

//     })

//     console.log(data);




//     return data
// }

// export function getFileNames() {

//     const fileNames = fs.readdirSync(_path)
//     const data = fileNames.map(file => {
//         const id = file.replace(/\.md$/, '')
//         console.log("reading file", path.join(_path, file));
//         const content = matter(fs.readFileSync(path.join(_path, file), "utf-8"))

//         return { id, ...content.data }

//     })
//     console.log(data);
//     return data

// }




