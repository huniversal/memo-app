import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';

// 컴포넌트 import
import Header   from './components/Layout/Header';
import Sidebar  from './components/Layout/Sidebar';
import MemoPage from './components/Memo/MemoPage';
import MemoDetail from './components/Memo/MemoDetail';
import TodoPage from './components/Todo/TodoPage';
import MyPage   from './components/My/MyPage';
import NotFound from './components/NotFound';

const mockData = [
  {
    id : 0, 
    isDone : false, 
    title : "안녕하세요1",  
    content : "안녕",  
  },
  {
    id : 1, 
    isDone : false, 
    title : "안녕하세요2",
    content : "안녕2", 
  },
  {
    id : 2, 
    isDone : false, 
    title : "안녕하세요3",
    content : "안녕3",   
  }
];

function App() {
  const [memos, setMemos] = useState(mockData);
  const idRef = useRef(mockData.length);

  const onSave = (title, content) => {
    const newMemo = {
      id : idRef.current++,
      isDone : false,
      title : title,
      content : content,
    };
    setMemos([newMemo, ...memos]);
    return newMemo.id;
  }

  const onDelete = (targetId) => {
    setMemos(memos.filter((memo) => memo.id !== targetId));
  };

  return (
    <Router>
      <div className="App"> {/* Body위 컨텐츠 박스 */}
        <Header /> {/* 상단 Nav */}
        <div className="content">
          <Sidebar 
            memos={memos}
            onDelete={onDelete}
            /> {/* 동적 Sidebar */}
          <main className="main">{/* MainPage : 라우팅으로 페이지 전환 */}
            <Routes>
              <Route path="/"       element={<MemoPage 
                                              memos={memos} 
                                              onSave={onSave} />} />
              <Route path="/memo/:id" element={<MemoDetail 
                                              memos={memos} 
                                              onDelete={onDelete} 
                                              onSave={onSave} />} />
              <Route path="/todo"   element={<TodoPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="*"       element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
