import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from '../ui/Pagination';

const NewsList = () => {
  const [articles, setArticles] = useState([]);


  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const pageSize = 3;

  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
  
      try {
        // page와 pageSize 파라미터 추가!
        const url = `https://localhost:5000/api/news`;
        console.log("요청한 url", url);

        const res = await axios.get(url);
        setArticles(res.data.articles);
        setTotalResults(res.data.totalResults);
      } catch (error) {
        console.error("news 데이터 불러오기 실패", error);
      } 
    };

    fetchNews();
  }, [page]);

  const totalPages = Math.ceil(totalResults / pageSize);



  return (
    <div>
      {articles.map((article, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h2>{article.title}</h2>
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              style={{ width: "250px", height: "auto" }}
            />
          )}
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            기사 읽기
          </a>
        </div>
      ))}

      <Pagination setPage={setPage} totalPages={totalPages} page={page} />
    </div>
  );
};

export default NewsList;
