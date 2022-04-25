const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully.");
  }
});

const dbName = "restaurant";
const secret = "QD2hbJ8zi5j4AFZo";
const uri = `mongodb+srv://steak111:${secret}@cluster.cql6r.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  cors()
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);
