var fs = require('fs');
import path from "path"
const dataPath = path.join(process.cwd(), "users", "users.json")

export default function handler(req, res) {
    console.log("hit the users route");
    var obj;
    obj = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
    console.log(obj);
    res.status(200).json(obj)
}