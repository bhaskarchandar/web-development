const express= require("express");
const path = require("path");
const app= express();
const port=8000;
 
//Express specific stuff 
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// Stuff for using the pug file
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views'))


//for intiallizing the endpoints like get request and post request
app.get('/',(req,res)=>{
    const params= { }
    res.status(200).render('index.pug',params);
})



//command to start the server
app.listen(port, ()=> {  
    console.log(`the application is started successfully on port ${port}`);
})