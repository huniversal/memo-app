import React from "react";
import "../Style/todotoolbar.css";

const TodoToolbar = ({ onNavigate, label, onView, onAddEvent }) => {
  const goToBack = () => {
    onNavigate("PREV");
  };

  const goToNext = () => {
    onNavigate("NEXT");
  };

  const setMonthView = () => {
    onView("month");
  };

  const setWeekView = () => {
    onView("week");
  };

  return (
    <div className="custom-toolbar">
      {/* 왼쪽 월/주 버튼 */}
      <div className="view-button">
        <button onClick={setMonthView} className="custom-toolbar-view-button">
          월
        </button>
        <button onClick={setWeekView} className="custom-toolbar-view-button">
          주
        </button>
      </div>

      {/* 가운데 달 이동 버튼과 라벨 */}
      <div className="view-toolbar">
        <button onClick={goToBack} className="custom-toolbar-button">
          &#5130;
        </button>
        <span className="custom-toolbar-label">{label}</span>
        <button onClick={goToNext} className="custom-toolbar-button">
          &#5125;
        </button>
      </div>

      {/* 오른쪽 일정 추가 버튼 */}
      <div className="event-button">
        <button onClick={onAddEvent} className="custom-toolbar-add-event-button">
          일정 추가
        </button>
      </div>
    </div>
  );
};

export default TodoToolbar;
