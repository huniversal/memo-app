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

  // label을 "2024.01" 형식으로 변환하는 함수
  const formatLabel = (label) => {
    const [month, year] = label.split(" "); // "November 2024" → ["November", "2024"]
    const monthsMap = {
      January: "01",
      February: "02",
      March: "03",
      April: "04",
      May: "05",
      June: "06",
      July: "07",
      August: "08",
      September: "09",
      October: "10",
      November: "11",
      December: "12",
    };

    return `${year}.${monthsMap[month]}`; // "2024.11"
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
          &#10094;
        </button>
        {/* label을 "2024.01" 형식으로 변환하여 표시 */}
        <span className="custom-toolbar-label">{formatLabel(label)}</span>
        <button onClick={goToNext} className="custom-toolbar-button">
          &#10095;
        </button>
      </div>

      {/* 오른쪽 일정 추가 버튼 */}
      <div className="event-button">
        <button onClick={onAddEvent} className="custom-toolbar-add-event-button">
          일정 추가
        </button>
        <button onClick={""} className="custom-toolbar-list-button">
          일정 보기
        </button>
      </div>
    </div>
  );
};

export default TodoToolbar;
