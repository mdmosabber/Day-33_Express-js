const express = require('express');
const multer = require('multer');
require('dotenv').config();

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/upload');
    },
    filename: (req, file, cb)=> {
        const imageName = Date.now() +'_'+ file.originalname;
        cb(null, imageName);
    }
})

const upload = multer({storage:storage}).single('image');

app.post('/upload',(req, res)=>{
    upload(req, res, (err)=> {
        if(err){
            res.send('File Upload Fail');
        }else{
            res.send('File Upload Success'); 
        }
    })
  
})



const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`Server Run Successfully att http://localhost:${port}`);
})
