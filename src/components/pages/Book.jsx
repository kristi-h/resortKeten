import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { booked as initialBooked } from "../../data/bookedDates.jsx";

export default function Book() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bookedDates, setBookedDates] = useState(initialBooked);

  const handleSubmit = () => {
    if (!startDate || !endDate) return;

    const newBooking = { start: startDate, end: endDate };
    setBookedDates([...bookedDates, newBooking]);

    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-4xl font-bold text-yellow-800 font-saol mb-6">
        Book Your Stay
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 w-full sm:items-end items-center justify-center">
        <div className="flex flex-col">
          <label className="text-lg text-white font-saol font-medium mb-2 text-center sm:text-left">
            Check In
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="MMMM d, yyyy"
            placeholderText="01/01/2026"
            className="border border-gray-300 rounded-lg px-4 h-12 w-64 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-green-500"
            excludeDateIntervals={bookedDates}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg text-white font-saol font-medium mb-2 text-center sm:text-left">
            Check Out
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="MMMM d, yyyy"
            placeholderText="01/11/2026"
            className="border border-gray-300 rounded-lg px-4 h-12 w-64 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-green-500"
            excludeDateIntervals={bookedDates}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg text-transparent font-medium mb-2 block">
            Placeholder
          </label>
          <button
            onClick={handleSubmit}
            className="h-12 w-64 flex items-center justify-center px-4 text-base leading-6 font-semibold bg-yellow-800 text-white font-gara rounded-lg hover:bg-yellow-700 transition focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
