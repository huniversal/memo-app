import React from 'react'
import "../Style/TodoSidebar.css";

const TodoSidebar = ({show, onHide}) => {
  return (
    <div className={`Todo-sidebar ${show ? 'show' : ''}`}>
      {console.log("Sidebar class:", show ? 'show' : '')}
      <div className='Todo-Sidebar-Content'>
        <div className='Todo-Sidebar-header'>
          <h3>투두리스트 추가</h3>
          <button className="close-btn" onClick={onHide}>닫기</button>
        </div>
      </div>
    </div>
  )
}

export default TodoSidebar
