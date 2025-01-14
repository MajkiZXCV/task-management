import React, { useState } from 'react';

const DatePicker = ({ setSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateChange = (dayOffset) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + dayOffset);
    setCurrentDate(newDate);
    setSelectedDate(newDate);
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const generateDates = () => {
    const dates = [];
    for (let i = -2; i <= 2; i++) {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + i);
      dates.push(formatDate(newDate));
    }
    return dates;
  };

  return (
    <div className="date-picker">
      {generateDates().map((date, index) => (
        <div
          key={index}
          className={`date-item ${index === 2 ? 'selected' : ''}`}
          onClick={() => handleDateChange(index - 2)}
        >
          {date}
        </div>
      ))}
    </div>
  );
};

export default DatePicker;
