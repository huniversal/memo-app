import React, {useState} from 'react'
import moment from "moment";
import 'moment/locale/ko';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "../Style/customcalendar.css";
import TodoSidebar from './TodoSidebar';
import TodoToolbar from './TodoToolbar';

const localizer = momentLocalizer(moment);  // Moment.js를 사용하여 지역화 설정

const events = [
  {
    title : '회의', 
    start : new Date(2024, 10, 10, 26, 10, 0),
    end : new Date(2024, 10, 26, 12, 0),
    color : '4caf50'
  },
  {
    title: '추석 연휴',
    start: new Date(2024, 9, 15),
    end: new Date(2024, 9, 18),
    allDay: true,
    color: '#f44336',
  },
]

const customEvent = ({events}) => {
  <div style={{ padding : '5px', backgroundCOlor : event.color, borderRadius : '5px', color : 'white'}}>
    <strong>{event.title}</strong>
  </div>
}

const CustomCalendar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleOffanvas = () => {
    setShowOffcanvas(!showOffcanvas);
    console.log("Sidebar visibility:", !showOffcanvas);
  }

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowOffcanvas(fasle);
  }

  return (
    <div className='calendar-container'>
      <div className='btn-container'>
        <button className='btn-event' onClick={()=> {setSelectedEvent(null); toggleOffanvas();}}>
          일정 추가
        </button>
        <TodoSidebar 
          show={showOffcanvas} 
          onHide={toggleOffanvas}
          onAddEvent={handleAddEvent}
          selectedEvent={selectedEvent}  
        />

      </div>
      <Calendar
        localizer={localizer}                 // 지역화 설정을 캘린더에 전달
        events={events}                       // 이벤트 리스트를 전달
        components ={{
          toolbar : TodoToolbar,
        }}
        formats={{
          dayFormat: (date, culture, localizer) =>
            localizer.format(date, 'eeee', culture), // 'eeee'는 요일 전체 이름 (예: 월요일)
        }}
        startAccessor="start"                 // 이벤트 시작 시간 필드 지정
        endAccessor="end"                     // 이벤트 종료 시간 필드 지정
        style={{height:'70vh', width: "90%"}} // 캘린더의 높이 설정
        messages={{
          today: '오늘', 
          previous : '이전',
          next : '다음', 
          month : '월',
          day : '일', 
          dgenda : '일정'
        }}
      />
    </div>
  )
}

export default CustomCalendar
