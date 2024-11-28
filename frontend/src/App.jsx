import React, { useState, useRef } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
} from 'react-router-dom';
import './App.css';
import moment from 'moment';

// 컴포넌트 import
import Header   from './components/Layout/Header';
import Sidebar  from './components/Layout/Sidebar';
import MemoPage from './components/Memo/MemoPage';
import MemoDetail from './components/Memo/MemoDetail';
import TodoPage from './components/Todo/TodoPage';
import MyPage   from './components/My/MyPage';
import NotFound from './components/NotFound';

const mockData = [
  { id : 0, isDone : false, title : "안녕하세요1", content : "안녕", },
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
  },
  {
    id : 3, 
    isDone : false, 
    title : "안녕하세요1",  
    content : "안녕",  
  },
  {
    id : 4, 
    isDone : false, 
    title : "안녕하세요2",
    content : "안녕2", 
  },
  {
    id : 5, 
    isDone : false, 
    title : "안녕하세요3",
    content : "안녕3",   
  },
  {
    id : 6, 
    isDone : false, 
    title : "안녕하세요1",  
    content : "안녕",  
  },
];

const App = () => {
  const [memos, setMemos] = useState(mockData); // 메모 데이터 상태
  const idRef = useRef(mockData.length);        // 새 메모의 ID를 추적하는 ref

  const onSave = (id, title, content) => {
    if (id !== undefined && id !== null) {
      setMemos((prevMemos) =>
        prevMemos.map((memo) =>
          memo.id === id ? { ...memo, title, content } : memo
        )
      );
    } else {
      const newMemo = {
        id: idRef.current++,
        isDone: false,
        title,
        content,
      };
      setMemos((prevMemos) => [newMemo, ...prevMemos]);
      console.log("New Memo Added:", newMemo); // 디버깅용 로그
      return newMemo.id; // 새로 생성된 메모 ID 반환
    }
  };

  const onDelete = (id) => {
    setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));
  };
  
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Sidebar memos={memos} onDelete={onDelete} />
          <main className="main">
            <Routes>
              <Route
                path="/"
                element={<MemoPage memos={memos} onSave={onSave} />}
              />
              <Route
                path="/memo/:id"
                element={ <MemoDetail memos={memos} onDelete={onDelete} onSave={onSave} />
                }
              />
              <Route path="/todo" element={<TodoPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};


export default App;
