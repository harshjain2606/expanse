const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
const path =require('path');

dotenv.config();
//databse call
connectDb();

//rest object
const app = express();
app.use(cors());

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transection routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));
//static files
app.use(express.static(path.join(__dirname,'./client/build')));
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
