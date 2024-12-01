import React, { useState } from "react";
import "../Style/todomodal.css";

const TodoModal = ({ isOpen, onClose, onAddEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title || !date || !startTime || !endTime) {
      alert("모든 필드를 입력해주세요!");
      return;
    }

    const newEvent = {
      id: Math.random(),
      title,
      start: new Date(`${date}T${startTime}`),
      end: new Date(`${date}T${endTime}`),
    };
    console.log("New Event: ", newEvent);
    onAddEvent(newEvent); // 부모 컴포넌트에 전달
    setTitle("");
    setDate("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="modal-container" onClick={(e) => e.target.className === "modal-container" && onClose()}>
      <div className="modal-content">
        <h1>일정 추가</h1>
        <div className="modal-content-input">
          <input type="text" placeholder="새로운 이벤트" value={title} onChange={(e) => setTitle(e.target.value)} />
          <h3>날짜</h3>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <h3>시작</h3>
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          <h3>종료</h3>
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </div>
        <div className="modal-btn">
          <button onClick={handleSubmit}>저장</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
