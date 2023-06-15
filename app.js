const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true})); //to enable use of body parser
app.use(express.static("public"));

var hmpgInput="";
var year="";
var semester="";
var branch="";

//get and post request for home route
app.get("/",function(req,res)
{
    res.render("homepage");
});
app.post("/", function(req,res)
{
    hmpgInput = req.body.homeInput;
    console.log(hmpgInput);
});

//post request for header
app.post("/header", function(req,res)
{
    let header = req.body.header;
    if(header==="1")
        res.redirect("/");
    else
        console.log(header);
});

app.listen(3000, function()
{
    console.log("Server is running on port 3000");
});
