import React from "react";
import { useState } from "react";
import "../Style/todomodal.css";

const TodoModal = ({ isOpen, onClose, children }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  if (!isOpen) return null; // 모달이 열려 있지 않으면 아무것도 렌더링하지 않음

  const handleAddEvent = () => {
    if(title && date) {
      onAddEvent ({
        id : Math.random(),
        title, 
        start : new Date(`${date}T${time || "00:00"}`),
        end : new Date(`${date}T${time || "00:30"}`)
      });
      setTitle("");
      setDate("");
      setStartTime("");
      setEndTime("");
      onClose("");
    } else {
      alert("일정과 날짜를 입력해주세요");
    }
  }

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") {
          onClose(); // 배경 클릭 시 모달 닫기
        }
      }}
    >
      <div className="modal-content">
        <h2>일정 추가</h2>
        <div>
          <label>
            일정 : <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            날짜 : <input type="text" value={title} onChange={(e) => setDate(e.target.value)} />
          </label>
          <label>
            시작시간 : <input type="text" value={title} onChange={(e) => setStartTime(e.target.value)} />
          </label>
          <label>
            종료시간 : <input type="text" value={title} onChange={(e) => setEndTime(e.target.value)} />
          </label>
        </div>
        <div>
          <button className="modal-add-btn" onClick={handleAddEvent}>
            추가
          </button>
          <button className="modal-close-btn" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
