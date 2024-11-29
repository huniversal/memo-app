import React, { useState } from 'react'

const TodoModal = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = () => {
    const newEvents = {
      id : Math.random(),
      title, 
      start : moment(date).set({hour:startTime.split(':')[0], minute:startTime.split(':')[1]}).toDate(),
      end : set({hour:endTime.split(':')[0], minute:endTime.split(':')[1]}).toDate(),
    };
    onAddEvent(newEvents);
  }
  return (
    <div className={`Todo-modal ${show ? 'show' : ''}`}>
      <div className='Todo-modal-Content'>
        <h3>일정 추가</h3>
        <button className='close-modal' onClick={''}>닫기</button>
      </div>
      
    </div>
  )
}

export default TodoModal
