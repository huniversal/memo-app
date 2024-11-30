import React from "react";
import "../Style/TodoSidebar.css";

const TodoSidebar = ({ show, onHide, events }) => {
  console.log(show ? "Sidebar is visible" : "Sidebar is Hidden");

  return (
    <div className={`Todo-sidebar ${show ? "show" : ""}`}>
      <div className="Todo-Sidebar-Content">
        <div className="Todo-Sidebar-header">
          <h3>일정 리스트</h3>
          <button className="close-btn" onClick={onHide}>
            닫기
          </button>
        </div>
        <ul className="event-list">
          {events.map((event) => (
            <li key={event.id}>
              <strong>{event.title}</strong>
              <p>
                {event.start.toLocaleDateString()} {event.start.toLocaleTimeString()} ~{" "}
                {event.end.toLocaleTimeString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoSidebar;
