const express = require('express');
const bodyParser = require('body-parser');
const app = express();   
const mock = require('./data/index.js');

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/', function (req, res) {  //定义路由
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from("<a href='http://192.168.26.111/mock'>虚拟数据</a>"))   //返回数据
    
});

app.get('/mock', function (req, res) {
    res.send(mock) //返回数据
})                                                                      

//定义端口，此处所用为8888端口，可自行更改
var server = app.listen(8888, function () {
    console.log('runing 8888...');
})




