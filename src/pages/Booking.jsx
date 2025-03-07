import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiCalendar, BiTime, BiBook } from 'react-icons/bi';

const Booking = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDuration, setSelectedDuration] = useState(1);

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle booking logic here
    console.log('Booking submitted:', { selectedDate, selectedTime, selectedDuration });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-md p-8"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Book Your Storytelling Session</h1>
        
        <form onSubmit={handleBooking} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">
              <BiCalendar className="inline mr-2" />
              Select Date
            </label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              <BiTime className="inline mr-2" />
              Select Time
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            >
              <option value="">Choose a time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              <BiBook className="inline mr-2" />
              Session Duration (hours)
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(Number(e.target.value))}
              required
            >
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
            </select>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Booking Summary</h3>
            <div className="space-y-2 text-gray-600">
              <p>Duration: {selectedDuration} hour(s)</p>
              <p>Price per hour: $25</p>
              <p className="text-lg font-semibold text-primary-600">
                Total: ${25 * selectedDuration}
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Confirm Booking
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Booking;