const express = require('express');
const app = express();
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('view.ejs');
    console.log('Hello');
});

app.listen(3000);