import React, {useState} from 'react'
import moment from "moment";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "../Style/customcalendar.css";
import TodoSidebar from './TodoSidebar';

const localizer = momentLocalizer(moment);
const CustomCalendar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffanvas = () => {
    setShowOffcanvas(!showOffcanvas);
    console.log("Sidebar visibility:", !showOffcanvas);
  }
  return (
    <div className='calendar-container'>
      <div className='btn-container'>
        <button className='btn-event' onClick={toggleOffanvas}>
          투두리스트 추가
        </button>
        <TodoSidebar show={showOffcanvas} onHide={toggleOffanvas}/>
      </div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{height:'70vh', width: "90%"}}
      />
    </div>
  )
}

export default CustomCalendar
