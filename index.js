require("dotenv").config()
const express = require("express")
const app = express();
const port = process.env.PORT 

app.get("/", (req, res) => {
     res.send("hello from express")
})
app.get("/home", (req, res) => {
     res.send("hello from home")
})

app.listen(port, () => {
    console.log(`server working on port ${port}`);
})

