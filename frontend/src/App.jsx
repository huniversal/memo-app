import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route } from 'react-router'
import Header from './components/Header'

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MemoPage from './pages/MemoPage';
import TodoPage from './pages/TodoPage';
import MyPage from './pages/MyPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        {/* Body위 컨텐츠 박스 */}
        <div className='content-box'>
          {/* 상단 Nav */}
          <Header />
          <div className='content'>
            <SideBar />
            {/* MainPage : 라우팅으로 페이지 전환 */}
            <main className='main'>
              <Routes>
                <Route path='/' element={<MemoPage />} />
                <Route path='/' element={<TodoPage />} />
                <Route path='/' element={<MyPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
