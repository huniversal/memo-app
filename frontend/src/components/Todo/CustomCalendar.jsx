import React, { useState } from "react";
import moment from "moment";
import "moment/locale/ko"; // Moment.js 한국어 로케일 불러오기
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../Style/customcalendar.css";
import TodoSidebar from "./TodoSidebar";
import TodoToolbar from "./TodoToolbar";

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
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
    console.log("Sidebar visibility:", !showOffcanvas);
  };

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowOffcanvas(false);
  };

  return (
    <div className="calendar-container">
      <TodoSidebar
        show={showOffcanvas}
        onHide={toggleOffcanvas}
        onAddEvent={handleAddEvent}
        selectedEvent={selectedEvent}
      />
      <Calendar
        localizer={localizer}
        events={events}
        components={{
          toolbar: (props) => (
            <TodoToolbar
              {...props}
              onAddEvent={() => {
                setSelectedEvent(null);
                toggleOffcanvas();
              }}
            />
          ),
        }}
        formats={{
          dayFormat: (date, culture, localizer) =>
            localizer.format(date, "ddd", culture), // 요일 전체 이름으로 설정
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
