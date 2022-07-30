const express=require("express")  //importing the express
const cors=require("cors");
const app=express();   //calling the express
const {db}=require("./connectDB")

db();

//importing routes
const authRoutes = require('./routes/auth');
const veg =require('./routes/vegs');

app.use(express.json());     //getting the data in json format
app.use(cors());
app.use('/api', authRoutes);
app.use('/api', veg);


app.get('/', (req, res) => {
    res.status(200).send('Welcome to my App')
})
const PORT =4000;

app.listen(PORT,()=>{
    console.log("listening on the port",PORT)
})


