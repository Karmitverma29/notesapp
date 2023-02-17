const express=require('express');
const parser=require('body-parser');
const cors=require('cors');
const {connection}=require('./configs/db');
const {userRouter}=require('./routes/User.routes');
const{NoteRouter}=require("./routes/Note.routes");
const{authenticate}=require('./middlewares/authenticate.middleware');
const app=express();
app.use(parser.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("HOME PAGE");
})

app.use('/users',userRouter);
app.use(authenticate);
app.use('/notes',NoteRouter);
app.listen(8080,async()=>{
    try{
        await connection;
        console.log("Db connected.");
    }
    catch(err){
        console.log(err.message);
    }
    console.log("Server running on port 8080")
})