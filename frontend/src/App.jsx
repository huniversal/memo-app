import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 컴포넌트 import
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MemoPage from './components/MemoPage';
import TodoPage from './components/TodoPage';
import MyPage from './components/MyPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        {/* Body위 컨텐츠 박스 */}
        <div className="content-box">
          {/* 상단 Nav */}
          <Header />
          <div className="content">
            <Sidebar />
            {/* MainPage : 라우팅으로 페이지 전환 */}
            <main className="main">
              <Routes>
                <Route path="/" element={<MemoPage />} />
                <Route path="/todo" element={<TodoPage />} />
                <Route path="/mypage" element={<MyPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
