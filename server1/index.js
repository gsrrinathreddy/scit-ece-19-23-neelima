import { MonitorSharp } from '@mui/icons-material';
import express from 'express';

import cors from 'cors';
const app = express ()
app.use (cors());


app.get ("/",(req,res)=>{
    res.send("I have created my first api")
})
app.get("/aboutme",(req,res)=>{
    res.json({
        Name:"Neelima",
        MotherName:"Kruna",
        FatherName:"Dasharatham",
         Email:"neelimasomishettygmail.com",
         PhoneNo:7680992432,
         Adderss:"Shanthinagar Sircilla"
    })

})
app.get("/Experiance",(req,res)=>{
    res.json({
        Company:"HONEYWELL ICT ACADEMY",
        Experiance:"six months",
        Company:"IEEE Pantech e-learning",
        Experiance:"one month"


    })
})
app.get("/Hobbies",(req,res)=>{
    res.json({
        readingbooks:"Reading Books",
        workout:"Workout",
        listeningtomusic:"Listeningto Music"

    })
})
app.get("/Skills",(req,res)=>{
    res.json({
        frontend:"React",
        launguages:"Javascript",
        componentLibraries:"MUI"
    })
})
app.get("/Qualification",(req,res)=>{
    res.json({
        Graduation:"B.Tech",
        Intermediate:"MPC",
        Secondary:"SSC"
    })
})
app.listen(8000,()=>{
    console.log("Server runnig on port 8000")
})