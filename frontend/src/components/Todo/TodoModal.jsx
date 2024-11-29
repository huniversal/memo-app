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

    onAddEvent(newEvent); // 부모 컴포넌트에 전달
    setTitle("");
    setDate("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="modal-container" onClick={(e) => e.target.className === "modal-container" && onClose()}>
      <div className="modal-content">
        <h2>일정 추가</h2>
        <div>
          <label>제목:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>날짜:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <label>시작 시간:</label>
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          <label>종료 시간:</label>
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </div>
        <div>
          <button onClick={handleSubmit}>저장</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
