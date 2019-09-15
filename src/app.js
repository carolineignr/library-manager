const express = require('express');
const app = express();
const path = require('path');
const getReturn = require("./libraryManager")

app.set('views', path.join(__dirname, 'views'));    
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    const result = getReturn("./config.json")
    res.render('index', result)
});


app.listen(process.env.port || 3000);

console.log('Running at localhost port 3000');