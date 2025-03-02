import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { booked } from "../../data/bookedDates.jsx";

export default function Book() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold text-stone-900 mb-6">
        Book Your Stay
      </h2>
      <div className="flex gap-6">
        <div className="flex flex-col items-start">
          <label className="text-lg text-stone-900 font-medium mb-2">
            Check-in Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a date"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            excludeDateIntervals={booked}
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="text-lg text-stone-900 font-medium mb-2">
            Check-out Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a date"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            excludeDateIntervals={booked}
          />
        </div>
      </div>
    </div>
  );
}
