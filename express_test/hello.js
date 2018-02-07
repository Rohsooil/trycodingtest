const express = require('express');
const app = express();
const portNo = 3000;
app.get('/',(req,res,next)=>{
    res.send("Hello World!");
});

app.listen(portNo,(err)=>{
    if(err){
        console.log('에러져~',err)
    }
    console.log('잘 돌아가는중')
})