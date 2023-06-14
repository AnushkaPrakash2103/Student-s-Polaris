
const express = require("express");
const bodyParser = require("body-parser");

const ejs = require("ejs");
const app = express();
app.set('views', __dirname + '/views')
app.set("view engine", "ejs");

//ejs.pa
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
    if(hmpgInput=="1")
        res.redirect("/year");
    else if(hmpgInput=="2")
        console.log(hmpgInput);
    else
        console.log(hmpgInput);
});



//get and post request for year
app.get("/year", function(req,res){
    res.render("index_year");
});
app.post("/year", function(res,req){
    //handle post request
});
app.post("/header", function(req,res)
{
    let header = req.body.header;
    if(header==="1")
        res.redirect("/");
    else
        console.log(header);
});

app.listen(4028, function()
{
    console.log("Server is running on port 4000");
});


