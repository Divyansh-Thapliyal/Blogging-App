const express=require('express');
const app=express();
const dotenv=require('dotenv'); // this is used to hide sensitive data like username and password of mongodb link which is used for connection.
const mongoose=require('mongoose');
const path=require('path');
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users');
const postRoute=require('./routes/posts')
const categoryRoute=require('./routes/categories');
const bodyParser=require("body-parser");
// for img upload in post.
const multer=require('multer');


app.use(express.json());
 // first install another library npm path and then add this line so as to use PF in frontend.
app.use("/images",express.static(path.join(__dirname,"/images"))); 

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(console.log("Database connected")).catch((err)=>{console.log(err)});


//Since my project is not for large scale.So I can use file storage i.e storing inside the project folder. First of all install multer package. 
// Multer is a very famous library which allows us to easily manage files being uploaded from our frontend no matter if it is react frontend or html
// frontend.Create a folder where all imgs will be stored.
// Now we need 3 things in multer.Multer will be served as middleware.
// first manage our storage.Here we determine stuffs like where to store img,name of file we have to handle,duplicate files etc.so basically in 
// in storage object we need to determined all specifications of our uploaded file to be.
//Middleware will be something called like upload and it will contain multer object and inside of it it will contain storage.So this is an object 
// containing all info of storage. 

const storage=multer.diskStorage({
    destination:(req,file,cb)=>
    {
         cb(null,"images"); // images is the locn of folder where we want to store imgs.
    },filename:(req,file,cb)=>
    { 
       cb(null,req.body.name);
    }
    // cb=callback function is used for determining where we will store that imgs.If any error occur we dont want img to get send anywhere thatswhy
    // passed null as first parameter in cb(null,....).

});

// can use aws s3 for image uploading.
const upload=multer({storage:storage});
app.post('/api/upload',upload.single("file"),(req,res)=>
{
    res.status(200).json("File has been uploaded.");
})



app.use('/api/auth',authRoute);

app.use('/api/users',userRoute);

app.use('/api/posts',postRoute);

app.use('/api/categories',categoryRoute);


app.listen("5000",()=>{console.log("Server running")});