require('./mongoose');
const express = require('express');
const mongoose = require('./mongoose');
const app = express();
const port = 5000;

app.use(express.json())
var cors = require('cors')
app.use(cors())
const joinroute = require('./routes/routes')
const usrroute = require('./routes/user')
const post = require('./routes/blogpost')
const catagory = require('./routes/catagory')
//
const multex = require('multer')
const storage = multex.diskStorage({
    destination: (req, file, cb) => { 
        cb(null, "images") }, 
        filename: (req, file, cb) => { 
            cb(null, ".jpg") }
})
const upload = multex({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).send('uploaded succesfully')

})
//


app.use("/api/posts", post)
app.use("/api/update", usrroute)
app.use("/api/catagory", catagory)
app.use("/api/join", joinroute)
app.listen(port, () => { console.log('port is running at ' + port) })
