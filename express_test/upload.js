const express = require('express');
const app = express();

const multer = require('multer');
const path = require('path');

const tmpDir = path.join(__dirname,'tmp');
const pubDir = path.join(__dirname,'pub');
const uploader = multer({dest: tmpDir});

app.listen(3000,()=>{
    console.log("Server Running");
});

app.get('/',(req,res)=>{
    res.send(
        '<form method="POST" action="/" enctype="multipart/form-data">'+
        '<input type="file" name="aFile"><br />'+
        '<input type="submit" value="업로드">'+
        '</form>'
    )
});

app.use('/pub',express.static(pubDir));

app.post('/',uploader.single('aFile'),(req,res)=>{
    console.log('파일을 받아부렀으 이름 : ' + req.file.originalname)
    console.log('파일을 받아부렀으 경로 : ' + req.file.path)
    if(req.file.mimetype !== 'image/png'){
        res.send('png 이미지만 업로드 가능여')
        return
    }
    
    const fname = req.file.filename + '.png';
    const des = pubDir + '/' + fname;
    const fs = require('fs')
    fs.rename(req.file.path,des);
    res.send('다음과 같은 파일이 업로드 되었습니다.' + `<img src="/pub/${fname}">`)
});
