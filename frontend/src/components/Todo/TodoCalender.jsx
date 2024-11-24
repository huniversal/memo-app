import React, { useState } from 'react';
import moment from 'moment';
import '../Style/TodoCalender.css';

function Calendar() {
  const [date, setDate] = useState(() => moment());

  const handleDayClick = (current) => setDate(current);
  const returnToday = () => setDate(moment());
  const jumpToMonth = (num) =>
    num ? setDate(date.clone().add(30, 'day')) : setDate(date.clone().subtract(30, 'day'));

  function generate() {
    const today = date;
    const startWeek = today.clone().startOf('month').week();
    const endWeek =
      today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    let calendar = [];

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = today.clone().week(week).startOf('week').add(n + i, 'day');
              let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
              let isGrayed = current.format('MM') !== today.format('MM') ? 'grayed' : '';
              return (
                <div
                  className={`box ${isSelected} ${isGrayed}`}
                  key={i}
                  onClick={() => handleDayClick(current)}
                >
                  <span className="text">{current.format('D')}</span>
                </div>
              );
            })}
        </div>
      );
    }
    return calendar;
  }

  return (
    <div className="wrapper">
      <div className="calendar-head">
        <div className="head">
          <span className="title">{date.format('YYYY년 MM월')}</span>
          <div className="util-button">
            <button onClick={() => jumpToMonth(0)}>
              <i className="fas fa-angle-left"></i>
            </button>
            <button onClick={returnToday}>Today</button>
            <button onClick={() => jumpToMonth(1)}>
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="calendar-body">
        <div className="row">
          {['일', '월', '화', '수', '목', '금', '토'].map((el) => (
            <div className="box" key={el}>
              <span className="text">{el}</span>
            </div>
          ))}
        </div>
        {generate()}
      </div>
    </div>
  );
}

export default Calendar;
