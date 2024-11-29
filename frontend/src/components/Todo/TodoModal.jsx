import React from "react";
import "../Style/todomodal.css";

const TodoModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // 모달이 열려 있지 않으면 아무것도 렌더링하지 않음

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
        {children} {/* 모달 내용 */}
        <button className="modal-close-btn" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default TodoModal;
