const {removeUnusedCss} = require("./index.js");
const express = require("express");
const cors = require('cors')
const app = express()


app.use(express.json({limit: '25mb'}));
app.use(cors({
    origin: '*'
}));



app.get("/", (req,res)=>{
    res.status(200).send("hello")

})
app.post("/api/v1/remove-unused-css", removeUnusedCss)

const port = 4000;
app.listen( process.env.PORT || port,()=>{
    console.log(`listening at port ${ port }`)
})