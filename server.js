const { createHash } = require('crypto');
const express = require('express');
const app = express();
// const cors = require('cors');

// app.use(cors());
app.use(express.json());

const path = __dirname;

app.get("/home", async(req, res) => {
    var i = 0;
    var x = "Testing"
    var y = createHash('shake256')
    // for(var i = 0; i < 10000; i++){
    //     console.log(i);
    // }
    res.sendFile(path + "/views/home.html")
});

app.get("/template", async(req, res) => {
    res.sendFile(path + "/views/template.html")
});


app.listen(5001, () => {
    console.log('listening on port 5001');
})