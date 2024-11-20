// src/components/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다!</p>
      <a href="/">홈으로 돌아가기</a>
    </div>
  );
};

export default NotFound;
