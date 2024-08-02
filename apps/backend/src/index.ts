import express from "express"
import {BACKEND_URL} from '@repo/common/config'

const app = express();

app.get('/',(req,res)=>{
    res.json({message:"Hello World!"});
})

app.get('/backend',(req,res)=>{
    res.json({message:`${BACKEND_URL}`});
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})