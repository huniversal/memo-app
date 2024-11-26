import React, {useState} from 'react'
import moment from "moment";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "../Style/customcalendar.css";
import TodoSidebar from './TodoSidebar';

const localizer = momentLocalizer(moment);
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
          투두리스트 추가
        </button>
        <TodoSidebar 
          show={showOffcanvas} 
          onHide={toggleOffanvas}
          onAddEvent={handleAddEvent}
          selectedEvent={selectedEvent}  
        />

      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{height:'70vh', width: "90%"}}
      />
    </div>
  )
}

export default CustomCalendar
