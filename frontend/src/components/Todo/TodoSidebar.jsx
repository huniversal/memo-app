import moment from 'moment';
import React, { useState } from 'react'
import "../Style/TodoSidebar.css";

const TodoSidebar = ({show, onHide}) => {
  return (
    <div className={`Todo-sidebar ${show ? 'show' : ''}`}>
      {console.log("Sidebar class:", show ? 'show' : '')}
      <div className='Todo-Sidebar-Content'>
        <div className='Todo-Sidebar-header'>
          <h3>일정 보기</h3>
          <button className="close-btn" onClick={onHide}>닫기</button>
        </div>
      </div>
    </div>
  )
}

export default TodoSidebar
