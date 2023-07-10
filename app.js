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
   year = req.query.year;
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
  let secondTableVisible = loggedIn;
  res.render("index_sem", {
    year,
    semesterOne,
    semesterTwo,
    semesterOneImage,
    semesterTwoImage,
    secondTableVisible,
    log: loggedIn, userName: userName,
  });
});




//for branch


app.post("/semester", (req, res) => {

   semester = req.body.sem;
  
  
  console.log("year: " + year + ", semester: " + semester);

  if (year === "1") {
    if (semester === "1") {
      res.redirect("/sem1");
    } else if (semester === "2") {
      res.redirect("/sem2");
    } else {
      res.redirect("/branch");
    }
  } else {
    res.redirect("/branch");
  }
});

app.post("/branch", (req, res) => {
   branch = req.body.branchInput;
 
  console.log("year: " + year + ", semester: " + semester + ", branch: " + branch);
   if(year ==="2"){
  if (semester === "1") {
    if (branch === "1") {
      res.redirect("/sem3_ai");
    }  if (branch === "2") {
      res.redirect("/sem3_cb");
    } 
    if (branch === "3") {
      res.redirect("/sem3_ce");
    } 
    if (branch === "4") {
      res.redirect("/sem3_cse");
    } 
    if (branch === "5") {
      res.redirect("/sem3_eee");
    } 
    if (branch === "6") {
      res.redirect("/sem3_me");
    }
    if (branch === "7") {
      res.redirect("/sem3_mme");
    }
    if (branch === "8") {
      res.redirect("/sem3_mnc");
    }
    if (branch === "8") {
      res.redirect("/sem3_ep");
    }
  } else if (semester === "2") {
    if (branch === "1") {
      res.redirect("/sem4_ai");
    } 
    if (branch === "2") {
      res.redirect("/sem4_cb");
    } 
    if (branch === "3") {
      res.redirect("/sem4_ce");
    }
    if (branch === "4") {
      res.redirect("/sem4_cse");
    } 
    if (branch === "5") {
      res.redirect("/sem4_eee");
    } 
    if (branch === "6") {
      res.redirect("/sem4_me");
    }
    if (branch === "7") {
      res.redirect("/sem4_mme");
    }
    if (branch === "8") {
      res.redirect("/sem4_mnc");
    }
    if (branch === "9") {
      res.redirect("/sem4_ep");
    }
  }}
  if(year ==="3"){
    if (semester === "1") {
      if (branch === "1") {
        res.redirect("/sem5_ai");
      } 
      if (branch === "2") {
        res.redirect("/sem5_cb");
      } 
      if (branch === "3") {
        res.redirect("/sem5_ce");
      }
      if (branch === "4") {
        res.redirect("/sem5_cse");
      } 
      if (branch === "5") {
        res.redirect("/sem5_eee");
      } 
      if (branch === "6") {
        res.redirect("/sem5_me");
      }
      if (branch === "7") {
        res.redirect("/sem5_mme");
      }
      if (branch === "8") {
        res.redirect("/sem5_mnc");
      }
      if (branch === "9") {
        res.redirect("/sem5_ep");
      }

    } else if (semester === "2") {
      if (branch === "1") {
        res.redirect("/sem6_ai");
      } 
      if (branch === "2") {
        res.redirect("/sem6_cb");
      } 
      if (branch === "3") {
        res.redirect("/sem6_ce");
      }
      if (branch === "4") {
        res.redirect("/sem6_cse");
      } 
      if (branch === "5") {
        res.redirect("/sem6_eee");
      } 
      if (branch === "6") {
        res.redirect("/sem6_me");
      }
      if (branch === "7") {
        res.redirect("/sem6_mme");
      }
      if (branch === "8") {
        res.redirect("/sem6_mnc");
      }
      if (branch === "9") {
        res.redirect("/sem6_ep");
      }
    }}
    if(year ==="4"){
      if (semester === "1") {
        if (branch === "1") {
          res.redirect("/sem7_ai");
        } 
        if (branch === "2") {
          res.redirect("/sem7_cb");
        } 
        if (branch === "3") {
          res.redirect("/sem7_ce");
        }
        if (branch === "4") {
          res.redirect("/sem7_cse");
        } 
        if (branch === "5") {
          res.redirect("/sem7_eee");
        } 
        if (branch === "6") {
          res.redirect("/sem7_me");
        }
        if (branch === "7") {
          res.redirect("/sem7_mme");
        }
        if (branch === "8") {
          res.redirect("/sem7_mnc");
        }
        if (branch === "9") {
          res.redirect("/sem7_ep");
        }
      } else if (semester === "2") {
        if (branch === "1") {
          res.redirect("/sem8_ai");
        } 
        if (branch === "2") {
          res.redirect("/sem8_cb");
        } 
        if (branch === "3") {
          res.redirect("/sem8_ce");
        }
        if (branch === "4") {
          res.redirect("/sem8_cse");
        } 
        if (branch === "5") {
          res.redirect("/sem8_eee");
        } 
        if (branch === "6") {
          res.redirect("/sem8_me");
        }
        if (branch === "7") {
          res.redirect("/sem8_mme");
        }
        if (branch === "8") {
          res.redirect("/sem8_mnc");
        }
        if (branch === "9") {
          res.redirect("/sem8_ep");
        }
      }} 
});

//----------------------------

app.get("/branch", (req, res) => {
 
  res.render("branchpage",{log: loggedIn, userName: userName});
});



app.get("/sem1", (req, res) => {
  res.render("sem1", {secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});

app.get("/sem2", (req, res) => {
  res.render("sem2", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});

 app.get("/sem3_eee", (req, res) => {
  res.render("sem3_eee", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});

app.get("/sem4_eee", (req, res) => {
  res.render("sem4_eee", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem5_eee", (req, res) => {
  res.render("sem5_eee", {secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});

app.get("/sem6_eee", (req, res) => {
  res.render("sem6_eee", {secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem7_eee", (req, res) => {
  res.render("sem7_eee", {secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem8_eee", (req, res) => {
  res.render("sem8_eee", {secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem3_ai", (req, res) => {
  res.render("sem3_ai", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem4_ai", (req, res) => {
  res.render("sem4_ai", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem5_ai", (req, res) => {
  res.render("sem5_ai", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem6_ai", (req, res) => {
  res.render("sem6_ai", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem7_ai", (req, res) => {
  res.render("sem3_ai", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem8_ai", (req, res) => {
  res.render("sem3_ai", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem3_cse", (req, res) => {
  res.render("sem3_cse", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem4_cse", (req, res) => {
  res.render("sem4_cse", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem5_cse", (req, res) => {
  res.render("sem5_cse", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem6_cse", (req, res) => {
  res.render("sem6_cse", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem7_cse", (req, res) => {
  res.render("sem7_cse", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem8_cse", (req, res) => {
  res.render("sem8_cse", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem3_cb", (req, res) => {
  res.render("sem3_cb", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem4_cb", (req, res) => {
  res.render("sem4_cb", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem5_cb", (req, res) => {
  res.render("sem5_cb", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem6_cb", (req, res) => {
  res.render("sem6_cb", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem7_cb", (req, res) => {
  res.render("sem3_cb", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem8_cb", (req, res) => {
  res.render("sem3_cb", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem3_ce", (req, res) => {
  res.render("sem3_ce", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem4_ce", (req, res) => {
  res.render("sem4_ce", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem5_ce", (req, res) => {
  res.render("sem5_ce", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem6_ce", (req, res) => {
  res.render("sem6_ce", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem7_ce", (req, res) => {
  res.render("sem7_ce", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem8_ce", (req, res) => {
  res.render("sem8_ce", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem3_me", (req, res) => {
  res.render("sem3_me", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem4_me", (req, res) => {
  res.render("sem4_me", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem5_me", (req, res) => {
  res.render("sem5_me", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem6_me", (req, res) => {
  res.render("sem6_me", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem7_me", (req, res) => {
  res.render("sem7_me", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem8_me", (req, res) => {
  res.render("sem8_me", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem3_mme", (req, res) => {
  res.render("sem3_mme", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem4_mme", (req, res) => {
  res.render("sem4_mme", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem5_mme", (req, res) => {
  res.render("sem5_mme", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem6_mme", (req, res) => {
  res.render("sem6_mme", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem7_mme", (req, res) => {
  res.render("sem7_mme", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem8_mme", (req, res) => {
  res.render("sem8_mme", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem3_mnc", (req, res) => {
  res.render("sem3_mnc", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem4_mnc", (req, res) => {
  res.render("sem4_mnc", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem5_mnc", (req, res) => {
  res.render("sem5_mnc", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem6_mnc", (req, res) => {
  res.render("sem6_mnc", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem7_mnc", (req, res) => {
  res.render("sem7_mnc", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem8_mnc", (req, res) => {
  res.render("sem8_mnc", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem3_ep", (req, res) => {
  res.render("sem3_ep", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem4_ep", (req, res) => {
  res.render("sem4_ep", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem5_ep", (req, res) => {
  res.render("sem5_ep", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem6_ep", (req, res) => {
  res.render("sem6_ep", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem7_ep", (req, res) => {
  res.render("sem7_ep", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});
app.get("/sem8_ep", (req, res) => {
  res.render("sem8_ep", { secondTableVisible: loggedIn, log: loggedIn, userName: userName });
});



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
    if(header==4){
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




