import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="date-container flex">
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
        customInput={<CustomDatePickerInput />}
      />
      {selectedDate && (
        <div className="date-area">{selectedDate.toDateString()}</div>
      )}
    </div>
  );
};
const CustomDatePickerInput = ({ onClick }) => {
  return (
    <>
      <FaCalendarAlt className="calendar-logo" onClick={onClick} />
    </>
  );
};
export default DateInput;
