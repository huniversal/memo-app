import moment from 'moment';
import React, { useState } from 'react'
import "../Style/TodoSidebar.css";

const TodoSidebar = ({show, onHide, onAddEvent, seletedEvent}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = () => {
    const newEvents = {
      id: Math.random(), 
      title, 
      start: moment(date).set({hour:startTime.split(':')[0], minute:startTime.split(':')[1]}).toDate(),
      end : moment(date).set({hour:endTime.split(':')[0], minute:endTime.split(':')[1]}).toDate(),
    };
    onAddEvent(newEvents);
  };

  return (
    <div className={`Todo-sidebar ${show ? 'show' : ''}`}>
      {console.log("Sidebar class:", show ? 'show' : '')}
      <div className='Todo-Sidebar-Content'>
        <div className='Todo-Sidebar-header'>
          <h3>투두리스트 추가</h3>
          <button className="close-btn" onClick={onHide}>닫기</button>
        </div>
        <div className='sidebar-body'>
          <label>Title</label>
          <input 
            type='text'
            placeholder='Event Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Date</label>
          <input 
            type='date'
            placeholder='Event Title'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Start Time</label>
          <input 
            type='time'
            placeholder='Event Title'
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <label>End Time</label>
          <input 
            type='time'
            placeholder='Event Title'
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <button className='btn-primary' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default TodoSidebar
