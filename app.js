const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/year", (req, res) => {
  res.render("index_year");
});

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
  });
});

app.post("/", (req, res) => {
  const hmpgInput = req.body.homeInput;
  if (hmpgInput === "1") {
    res.redirect("/year");
  } else if (hmpgInput === "2") {
    // Handle other options if needed
  } else {
    // Handle other options if needed
  }
});

app.post("/year", (req, res) => {
  const selectedYear = req.body.year;
  res.redirect(`/semester?year=${selectedYear}`);
});

app.post("/header", (req, res) => {
  const header = req.body.header;
  if (header === "1") {
    res.redirect("/");
  } else {
    console.log(header);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});




