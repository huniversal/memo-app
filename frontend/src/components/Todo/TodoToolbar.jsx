// import React from "react";
// import "../Style/todotoolbar.css";

// const TodoToolbar = ({ onNavigate, label, onView, onAddEvent }) => {
//   const goToBack = () => {
//     onNavigate("PREV");
//   };

//   const goToNext = () => {
//     onNavigate("NEXT");
//   };

//   const setMonthView = () => {
//     onView("month");
//   };

//   const setWeekView = () => {
//     onView("week");
//   };

//   return (
//     <div className="custom-toolbar">
//       {/* 왼쪽 월/주 버튼 */}
//       <div className="view-button">
//         <button onClick={setMonthView} className="custom-toolbar-view-button">
//           월
//         </button>
//         <button onClick={setWeekView} className="custom-toolbar-view-button">
//           주
//         </button>
//       </div>

//       {/* 가운데 달 이동 버튼과 라벨 */}
//       <div className="view-toolbar">
//         <button onClick={goToBack} className="custom-toolbar-button">
//         &#10094;
//         </button>
//         <span className="custom-toolbar-label">{label}</span>
//         <button onClick={goToNext} className="custom-toolbar-button">
//         &#10095;
//         </button>
//       </div>

//       {/* 오른쪽 일정 추가 버튼 */}
//       <div className="event-button">
//         <button onClick={onAddEvent} className="custom-toolbar-add-event-button">
//           일정 추가
//         </button>
//         <button onClick={""} className="custom-toolbar-list-button">
//           일정 보기
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TodoToolbar;
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

  // 요일을 한글로 변환하는 함수
  const convertLabelToKorean = (label) => {
    const daysMap = {
      Sunday: "일",
      Monday: "월",
      Tuesday: "화",
      Wednesday: "수",
      Thursday: "목",
      Friday: "금",
      Saturday: "토",
    };

    // daysMap에서 매칭되는 값을 찾아 변경
    return label.replace(
      /(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/g,
      (match) => daysMap[match]
    );
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
        {/* label을 한글로 변환하여 표시 */}
        <span className="custom-toolbar-label">{convertLabelToKorean(label)}</span>
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

