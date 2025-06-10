const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '촬영지.html'));
});

app.get('/search', (req, res) => {
  res.sendFile(path.resolve(__dirname, '촬영지검색화면.html'));
});

app.get('/detail', (req, res) => {
  res.sendFile(path.resolve(__dirname, '검색결과자세히.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'login.html'));
});

// 로그인 API (JSON 파일 기반 사용자 인증)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const usersPath = path.resolve(__dirname, 'users.json');

  try {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: '서버 오류' });
  }
});

app.listen(8081, () => {
  console.log('Server listening on port 8081');
});
