import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 컴포넌트 import
import Header   from './components/Layout/Header';
import Sidebar  from './components/Layout/Sidebar';
import MemoPage from './components/Memo/MemoPage';
import TodoPage from './components/Todo/TodoPage';
import MyPage   from './components/My/MyPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App"> {/* Body위 컨텐츠 박스 */}
          <Header /> {/* 상단 Nav */}
          <div className="content">
            <div className='side-bar'>
              <Sidebar />
            </div>
            <main className="main">{/* MainPage : 라우팅으로 페이지 전환 */}
              <Routes>
                <Route path="/"       element={<MemoPage />} />
                <Route path="/todo"   element={<TodoPage />} />
                <Route path="/mypage" element={<MyPage />} />
              </Routes>
            </main>
          </div>
        </div>
    </Router>
  );
}

export default App;
