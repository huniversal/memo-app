// import React, { useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // 컴포넌트 import
// import Header   from './components/Layout/Header';
// import Sidebar  from './components/Layout/Sidebar';
// import MemoPage from './components/Memo/MemoPage';
// import TodoPage from './components/Todo/TodoPage';
// import MyPage   from './components/My/MyPage';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <Router>
//       <div className="App"> {/* Body위 컨텐츠 박스 */}
//           <Header /> {/* 상단 Nav */}
//           <div className="content">
//             <div className='side-bar'>
//               <Sidebar />
//             </div>
//             <main className="main">{/* MainPage : 라우팅으로 페이지 전환 */}
//               <Routes>
//                 <Route path="/"       element={<MemoPage />} />
//                 <Route path="/todo"   element={<TodoPage />} />
//                 <Route path="/mypage" element={<MyPage />} />
//               </Routes>
//             </main>
//           </div>
//         </div>
//     </Router>
//   );
// }

// export default App;

import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// 컴포넌트 import
import Header   from './components/Layout/Header';
import Sidebar  from './components/Layout/Sidebar';
import MemoPage from './components/Memo/MemoPage';
import TodoPage from './components/Todo/TodoPage';
import MyPage   from './components/My/MyPage';
import NotFound from './components/NotFound';

const mockData = [
  {
    id : 0, 
    isDone : false, 
    title : "안녕하세요1"    
  },
  {
    id : 1, 
    isDone : false, 
    title : "안녕하세요2"    
  },
  {
    id : 2, 
    isDone : false, 
    title : "안녕하세요3"    
  }
];

function App() {
  const [memos, setMemos] = useState([]);
  return (
    <Router>
      <div className="App"> {/* Body위 컨텐츠 박스 */}
        <Header /> {/* 상단 Nav */}
        <div className="content">
          <Sidebar memos={mockData}/> {/* 동적 Sidebar */}
          <main className="main">{/* MainPage : 라우팅으로 페이지 전환 */}
            <Routes>
              <Route path="/"       element={<MemoPage />} />
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

// // Sidebar를 동적으로 업데이트
// function SidebarWithActive() {
//   const location = useLocation(); // 현재 URL 경로 가져오기
//   return <Sidebar activePath={location.pathname} />;
// }

export default App;
