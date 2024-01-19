const express = require("express");
const blogRoute = require("./routes/blogRoute");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./example.env" });
const app = express();

// for sending cookie to frontend
// const corsConfig = {
//     origin: process.env.CLIENT_URL,
//     methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
//     credentials: true,
//   };

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/blog", blogRoute);

// handle wrong route
app.all("*", (req, res, next) => {
    res.status(404).json({
      
  })
});

const PORT = process.env.PORT || 8080;

// connect database
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Database is connected!");
});

// call server
app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}!!!`);
});
