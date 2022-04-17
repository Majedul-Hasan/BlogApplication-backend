const express = require("express");
const dbConnect = require("./config/db/dbConnect");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");

//errorHandler
const { errorHandler, notFound } = require("./middlewares/errorHandler");

//controllers

const userRoutes = require("./route/users/usersRoute");
const postRoutes = require("./route/posts/postRoute");
const commentRoutes = require("./route/comments/commentsRoute");
const emailRoutes = require("./route/email/emailRouts");
const categoryRoutes = require("./route/category/categoryRoute");
const cors = require('cors')
const app = express();
dbConnect();

// api rought
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(morgan("dev"));

//middleware
app.use(express.json());

// corse
app.use(cors())
/*
// custom middleware

const logger = (req, res, next) => {
  console.log("I'am logger");
  next();
};
*/
if(process.env.NODE_ENV==="development") {
  app.get('/', (req, res)=> res.status(200).send("development") )
  } else {
     app.get('/', (req, res)=> res.status(200).send("production") )
  }


//user route
app.use("/api/users", userRoutes);

//post route
app.use("/api/posts", postRoutes);

//comment route
app.use("/api/comments", commentRoutes);

//Email route
app.use("/api/email", emailRoutes);

//category Routes 
app.use("/api/category", categoryRoutes);

//error Handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5052;
app.listen(PORT, console.log(`server is running on port ${PORT}`));
