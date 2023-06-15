const express=require ("express");
const hbs = require("hbs");
const app= express();
const mongoose =require("mongoose");


const Detail =require("./models/Detail");
const routes = require('./routes/main');
mongoose.set('strictQuery',false);

app.use('/static',express.static("public"))
app.use('',routes)

//(template engine)
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")


//db connection
mongoose.connect("mongodb://localhost/website_tut",()=>{
    console.log("db connected")
    Detail.create({
        brandName:"Info Technical Solution",
        brandIconUrl:"https://yt3.googleusercontent.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s176-c-k-c0x00ffffff-no-rj",
        links:[
            {
                label:"Home",
                url:"/"
            },
            {
                label:"Services",
                url:"/services"
            },
            {
                label:"Gallery",
                url:"/gallery"
            },
            {
                label:""
            }
        ]
    })
});

const schema = new mongoose.Schema({
    name: String
  });
  
  
app.listen(process.env.PORT | "mongodb://27017",()=>{
    console.log("server started");
});