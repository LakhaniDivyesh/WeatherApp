const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

//path
const public_path=path.join(__dirname,"../public");

//views eng
app.set('view engine','hbs');
app.use(express.static(public_path));

//navigation
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("*",(req,res)=>{
    res.render("404");
});

app.listen(port,()=>{
    console.log(`${port} is running...`);
})