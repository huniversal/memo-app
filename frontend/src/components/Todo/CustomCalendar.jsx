import React, { useState } from "react";
import moment from "moment";
import "moment/locale/ko"; 
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../Style/customcalendar.css";
import TodoSidebar from "./TodoSidebar";
import TodoToolbar from "./TodoToolbar";
import TodoModal from "./TodoModal";

moment.locale("ko"); // 한국어 로케일 설정
const localizer = momentLocalizer(moment); // Localizer 설정

const initialEvents = [
  {
    title: "회의",
    start: new Date(2024, 10, 10, 10, 0),
    end: new Date(2024, 10, 10, 12, 0),
    color: "#4caf50",
  },
  {
    title: "추석 연휴",
    start: new Date(2024, 9, 15),
    end: new Date(2024, 9, 18),
    allDay: true,
    color: "#f44336",
  },
];

const CustomCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAddEvent = (newEvent) => {
    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, newEvent];
      console.log("Updated Events: ", updatedEvents); // 상태 업데이트 확인
      return updatedEvents;
    });
    setIsModalOpen(false);
  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      const newState = !prev;
      console.log("Sidebar state: ", newState); // 사이드바 상태 확인
      return newState;
    });
  };
  const daysInKorean = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="calendar-container">
      <TodoModal
        isOpen={isModalOpen}
        onClose={()=>setIsModalOpen(false)}
        onAddEvent={handleAddEvent}
      />
      <TodoSidebar
        show={isSidebarOpen}
        onHide={toggleSidebar}
        events={events}
      />
      <Calendar
        localizer={localizer}
        events={events}
        components={{
          toolbar: (props) => (
            <TodoToolbar
              {...props}
              onAddEvent={toggleSidebar}
              onToggleModal ={() => setIsModalOpen(true)}
            />
          ),
          month: {
            header: ({ date }) => (
              <div style={{ textAlign: "center" }}>
                {daysInKorean[moment(date).day()]}
              </div>
            ),
          },
          week: {
            header: ({ date }) => (
              <div style={{ textAlign: "center" }}>
                {daysInKorean[moment(date).day()]}
              </div>
            ),
          },
        }}
        formats={{
          dayFormat: (date, culture, localizer) =>
            localizer.format(date, "ddd", culture), // "ddd"는 요일 약자 (일, 월, ...)로 설정
        }}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "90%", width: "90%", backgroundColor: "white" }}
        messages={{
          today: "오늘",
          previous: "이전",
          next: "다음",
          month: "월",
          week: "주",
          day: "일",
          agenda: "일정",
        }}
      />
    </div>
  );
};

export default CustomCalendar;
