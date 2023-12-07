// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require('express')
const path = require('path')

// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()

app.get('/', async function(req, res){
    return res.sendFile(__dirname + '/main.html');
})

app.get('/question1', async function(req, res){
    return res.sendFile(__dirname + '/question1.html');
})

app.get('/question2', async function(req, res){
    return res.sendFile(__dirname + '/question2.html');
})

app.get('/question3', async function(req, res){
    return res.sendFile(__dirname + '/question3.html');
})

app.get('/loading', async function(req, res){
    return res.sendFile(__dirname + '/loading.html');
})

app.get('/result', async function(req, res){
    return res.sendFile(__dirname + '/result.html');
})

// css 적용되려면 해야 하는 것들
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, ',/', 'views', '404.html'));
})

// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

// 이제 터미널에 node app.js 를 입력해보자.