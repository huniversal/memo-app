// export default TodoToolbar;
import React, { useState } from "react";
import "../Style/todotoolbar.css";
import TodoModal from "./TodoModal"; // 모달 컴포넌트 불러오기

const TodoToolbar = ({ onNavigate, label, onView, onAddEvent, onToggleModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  const goToBack = () => {
    onNavigate("PREV");
  };

  const goToNext = () => {
    onNavigate("NEXT");
  };
  const formatLabel = (label) => {
    const [month, year] = label.split(" "); // "November 2024" → ["November", "2024"]
    const monthsMap = {
      January: "01", February: "02", March: "03", April: "04", May: "05", June: "06",
      July: "07", August: "08", September: "09", October: "10", November: "11", December: "12",
    };

    return `${year}.${monthsMap[month]}`; // "2024.11"
  };

  return (
    <div className="custom-toolbar">
      {/* 가운데 달 이동 버튼과 라벨 */}
      <div className="view-toolbar">
        <button onClick={goToBack} className="custom-toolbar-button">
          &#10094;
        </button>
        <span className="custom-toolbar-label">{formatLabel(label)}</span>
        <button onClick={goToNext} className="custom-toolbar-button">
          &#10095;
        </button>
      </div>
      <div className="event-button">
        <button
          onClick={onToggleModal} // 모달 열기
          className="custom-toolbar-add-event-button"
        >
          &#43;
        </button>
        <button 
        
          onClick = {() => {
            console.log("Sidebar toggle triggered"); // 상태 변경 확인
            onAddEvent();
          }}
          className="custom-toolbar-list-button">
            ☰
        </button>
      </div>
    </div>
  );
};

export default TodoToolbar;
