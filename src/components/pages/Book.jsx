import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { supabase } from "../../supabaseClient";
// import RevealHover from "../ui/background/RevealHover";
import ScratchReveal from "../ui/background/ScratchReveal";

export default function Book() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchBookedDates();
  }, []);

  const fetchBookedDates = async () => {
    const { data, error } = await supabase.from("bookings").select("*");
    if (error) {
      console.error("Error fetching booked dates:", error);
      return;
    }

    const intervals = data.map((booking) => ({
      start: new Date(booking.start_date),
      end: new Date(booking.end_date),
    }));

    setBookedDates(intervals);
  };

  const handleSubmit = async () => {
    if (!startDate || !endDate) return;

    const { data: overlapping, error: checkError } = await supabase
      .from("bookings")
      .select("*")
      .lte("start_date", endDate.toISOString())
      .gte("end_date", startDate.toISOString());

    if (checkError) {
      console.error("Error checking for overlapping bookings:", checkError);
      return;
    }

    if (overlapping.length > 0) {
      setMessage("These dates are already booked. Please try different ones.");
      return;
    }

    const { error: insertError } = await supabase.from("bookings").insert([
      {
        start_date: startDate.toISOString().split("T")[0],
        end_date: endDate.toISOString().split("T")[0],
      },
    ]);

    if (insertError) {
      console.error("Error saving booking:", insertError);
      setMessage("Booking failed. Try again.");
    } else {
      setMessage("Booking successful!");
      fetchBookedDates();
      setStartDate(null);
      setEndDate(null);
    }
  };
  return (
    <ScratchReveal>
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold text-yellow-800 font-saol mb-6">
          Book Your Stay
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-5xl sm:items-end items-center justify-center">
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
              className="border border-gray-300 rounded-lg px-4 h-12 w-64 text-black text-base leading-6 focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="border border-gray-300 rounded-lg px-4 h-12 w-64 text-black text-base leading-6 focus:outline-none focus:ring-2 focus:ring-green-500"
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

        {message && (
          <p className="mt-6 text-white text-lg font-gara">{message}</p>
        )}
      </div>
    </ScratchReveal>
  );
}
