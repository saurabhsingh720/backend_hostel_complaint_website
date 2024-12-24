const express = require("express");
const { connectDB } = require("./config/db");
const { register } = require("./models/userSchema");
const { userIssue } = require("./models/hostelSchema");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
const PORT = process.env.PORT | 3001;
app.use(express.json({ extended: false }));
app.get("/", (req, res) => {
  res.send("server is Running");
});

app.post("/api/v1/register", (req, res) => {
  const data = register.create(req.body);
  res.send({
    message: "Registered successfully",
    success: true,
  });
});

app.post("/api/v1/login", (req, res) => {
  const { email, password } = req.body;
  register.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Incorrect password");
      }
    } else {
      res.json("user not found");
    }
  });
});

app.post("/api/v1/userIssue", (req, res) => {
  const data = userIssue.create(req.body);
  res.send({
    message: "Issue sent successfully",
    success: true,
  });
});

app.get("/api/v1/userIssue", async(req, res) => {
  try {
    const data = await userIssue.find({});
    res.json(data);
  } catch (error) {
     console.log("error in fetching data in backend", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  connectDB();
});
