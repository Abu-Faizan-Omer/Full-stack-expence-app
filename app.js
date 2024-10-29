const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cors = require('cors');
const path = require('path');

const sequelize = require("./util/database");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const expenceRoutes=require("./routes/expence");

// Serve static files
//app.use(express.static(path.join(__dirname, 'public')));

app.use("/",expenceRoutes)

sequelize.sync()
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server is running on http://localhost:5000");
    })
})
.catch((err)=>{
    console.error("Database connection failed:", err);
})