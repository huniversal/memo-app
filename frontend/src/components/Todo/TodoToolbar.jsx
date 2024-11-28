import React from 'react'
import "../Style/todotoolbar.css";


const TodoToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV'); // 이전 버튼 클릭시 작동
  };
  const goToNext = () => {
    toolbar.onNavigate('NEXT'); // 이전 버튼 클릭시 작동
  };
  const goToToday = () => {
    toolbar.onNavigate('TODAY'); // 이전 버튼 클릭시 작동
  };
  const setMonthView = () => {
    toolbar.onView('month');
  }
  const setWeekView = () => {
    toolbar.onView('week');
  }
  return (
    <div className="custom-toolbar">
      <div className='view-button'>
        <div onClick={setMonthView} className="custom-toolbar-view-button">
          월
        </div>
        <div onClick={setWeekView} className="custom-toolbar-view-button">
          주
        </div>
      </div>
      <div className='view-toolbar'>
        <button onClick ={goToBack} className="custom-toolbar-button">
          이전
        </button>
        <span className='custom-toolbar-label'>{toolbar.label}</span>
        <button onClick={goToNext} className="custom-toolbar-button">
          다음
        </button>
      </div>
    </div>
  )
}

export default TodoToolbar
