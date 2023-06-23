const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var year="";
var semester="";
var branch="";
var loggedIn=false;
var userName="";

// for main page
app.get("/", (req, res) => {
  res.render("homepage",{log: loggedIn, userName: userName});
});

app.post("/", (req, res) => {
  const hmpgInput = req.body.homeInput;
  if (hmpgInput === "1") {
    res.redirect("/year");
  } else if (hmpgInput === "2") {
     res.redirect("/clubs");
  } else {
    res.redirect("/fests");
  }
});
//----------------------


//for clubs, fests and about
app.get("/clubs",function(req,res)
{
    res.render("clubs",{log: loggedIn, userName: userName});
});

app.get("/fests", (req, res) => {
  res.render("fests",{log: loggedIn, userName: userName});
});

app.get("/about", function(req, res)
{
  res.render("about",{log: loggedIn, userName: userName});
});
//-----------------------


//for year 
app.get("/year", (req, res) => {
  res.render("index_year",{log: loggedIn, userName: userName});
});

app.post("/year", (req, res) => {
  year = req.body.year;
  res.redirect(`/semester?year=${year}`);
});
//-----------------------


//for semester
app.get("/semester", (req, res) => {
  const year = req.query.year;
  let semesterOne, semesterTwo, semesterOneImage, semesterTwoImage;

  if (year === "1") {
    semesterOne = "Semester One";
    semesterTwo = "Semester Two";
    semesterOneImage = "number-1.png";
    semesterTwoImage = "number-2.png";
  } else if (year === "2") {
    semesterOne = "Semester Three";
    semesterTwo = "Semester Four";
    semesterOneImage = "number-3.png";
    semesterTwoImage = "number-4.png";
  } else if (year === "3") {
    semesterOne = "Semester Five";
    semesterTwo = "Semester Six";
    semesterOneImage = "number-5.png";
    semesterTwoImage = "number-6.png";
  } else if (year === "4") {
    semesterOne = "Semester Seven";
    semesterTwo = "Semester Eight";
    semesterOneImage = "number-7.png";
    semesterTwoImage = "number-8.png";
  } else {
    return res.send("Invalid year selection");
  }

  res.render("index_sem", {
    year,
    semesterOne,
    semesterTwo,
    semesterOneImage,
    semesterTwoImage,
    log: loggedIn, userName: userName,
  });
});

app.post("/semester",(req,res)=>{

  semester=req.body.sem;
  if(year == "1"){
    //console.log(year);
  }
 else{ 
  //console.log(year);
  res.redirect("/branch");
 }
});
//-----------------------------


//for branch
app.get("/branch", (req, res) => {
  res.render("branchpage",{log: loggedIn, userName: userName});
});
app.post("/branch", (req, res) => {
  branch=req.body.branchInput;
  console.log("year: "+year+", semester: "+semester+" ,branch: "+branch);
});
//----------------------------


//for login and signup
app.get("/login", (req, res) => {
  res.render("login",{log: loggedIn, userName: userName});
});
app.get("/signUp", (req, res) => {
  res.render("signUp",{log: loggedIn, userName: userName});
});
app.get("/forgot", (req, res) => {
  res.render("forgotpage",{log: loggedIn, userName: userName});
});
//----------------------------


/************************************************************************************* */
// DATABASE FOR LOGIN AND SIGNUP PAGE 
main().catch(err=>console.log(err));

async function main()
{
  await mongoose.connect("mongodb://127.0.0.1:27017/signUpDB");

  var validateEmail = function(email) 
  {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
  };

  var signUpSchema = new mongoose.Schema({
    email: 
    {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: 
    {
      type: String,
      minlength: 6,
    }
   
  });

  const Signup = mongoose.model('Signup', signUpSchema);

  const person1 = new Signup
  ({
    email: "amisha2004@gmail.com",
    password: "Amisha2004",
  });

  // person1.save();

  //getting data from webpage
  app.post("/signUp", function(req,res)
  {
      // console.log(req.body);
      const emailName = req.body.email_uname;
      const passwordName = req.body.psw;
      const confirmpasswordName= req.body.confirmpsw;
      if(passwordName!= confirmpasswordName)
      {
        res.render('signUp', { log: loggedIn, userName: userName, error: 'Password not matched' });
      }
      const user = new Signup
      ({
          email: emailName,
          password: passwordName,
      })

      user.save().then(() => {
        console.log("User saved Successfully!")
      })
      .catch((error) => {
        console.log(error);
      });
      res.redirect("/");
  });

  app.post('/login', (req, res) => 
  {
    const emailName = req.body.email_uname;
    const passwordName = req.body.psw;

    Signup.findOne({ email: emailName })

      .then((user) => 
      {
        if (user) 
        {
          if (user.password === passwordName) {
            // User found and password matched, proceed with login
            loggedIn=true;
            userName=emailName;
            res.redirect("/");
          } else {
            // Invalid password
            res.render('login', {log: loggedIn, userName: userName, error: 'Invalid password' });
          }
        } 
        else 
        {
          // User not found
          res.render('login', {log: loggedIn, userName: userName, error: 'User not found' });
        }
      })

      .catch((error) => {
        // Error occurred during the query
        res.render('login', {log: loggedIn, userName: userName, error: 'An error occurred' });
      });
  });

  
  // for header 
  app.post("/header", async function(req, res)
  {
    const header = req.body.header;
    if (header === "1") {
      res.redirect("/");
    }
    else if(header==2){
      res.redirect("/about");
    }
    else if(header==3){
      res.redirect("/login");
    } 
    else if(header==4){
      loggedIn=false;
      res.redirect("/");
    }
    else if(header=="5"){
      loggedIn=false;
      await Signup.deleteOne({email: userName});
      userName="";
      res.redirect("/");
    }
    else
    {
      console.log(header);
    }
  });
  //------------------------

}

/************************************************************************************* */


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});




