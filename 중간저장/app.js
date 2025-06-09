
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req,res){
    const htmlPath = path.resolve(__dirname + '/촬영지.html');
    res.sendFile(htmlPath);
});

app.get('/search',function(req,res){
    const htmlPath = path.resolve(__dirname + '/촬영지검색화면.html');
    res.sendFile(htmlPath);
});

app.get('/detail',function(req,res){
    const htmlPath = path.resolve(__dirname + '/검색결과자세히.html');
    res.sendFile(htmlPath);
});
app.get('/login.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'login.html'));
});

app.listen(8081,()=>{
    console.log('Server listening on port 8081');
});

