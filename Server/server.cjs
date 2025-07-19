// 1. 필요한 모듈 가져오기
require('dotenv').config(); // .env 파일의 환경 변수를 process.env로 로드
const express = require('express');
const axios = require('axios');
const cors = require('cors');
console.log("Loaded API Key:", process.env.VITE_NEWS_API_KEY);
// 2. Express 앱 생성 및 포트 설정
const app = express();
const PORT = process.env.PORT || 5000; // 배포 환경이나 로컬에서 5000번 포트 사용

// 3. 미들웨어 설정
app.use(cors()); // 모든 출처 허용
app.use(express.json()); // JSON 파싱

// 🔧 수정: .env에서 API 키 가져오기
const API_KEY = process.env.VITE_NEWS_API_KEY;

// 4. API 라우트 설정
app.get('/api/news', async (req, res) => {
  
  const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 10;

  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    const newsResponse = await axios.get(apiUrl);
    res.json(newsResponse.data);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ message: '뉴스 데이터를 가져오는 데 실패했습니다.' });
  }
});

// 5. 서버 실행
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
