
import {useState, useEffect} from 'react'
import axios from 'axios';
import {Typography}from '@mui/material';


export default function AboutMe (){
    const [loader,setLoader]=  useState(true);
    const [aboutMe,setAboutMe] = useState(null);
    const connectToServer = async () => axios.get('http://localhost:8000/Aboutme')
                                             .then(res=>{
                                                console.log(res.data);
                                                setAboutMe(res.data);
                                                setLoader(false)

                                             }).catch(err=>console.log(err))
                                             useEffect(()=>{

                                             
    connectToServer();   
                                             },[])                                  
    return(
        <>
         <Typography>Name:Neelima</Typography>
         <Typography>MotherName:Kruna</Typography>
         <Typography>FatherName:"Dasharatham</Typography>
         <Typography> Email:"neelimasomishettygmail.com</Typography>
         <Typography> PhoneNo:7680992432</Typography>
         <Typography> Adderss:"Shanthinagar Sircilla</Typography>
        </>
    )
}