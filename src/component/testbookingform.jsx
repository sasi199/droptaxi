import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';

const  BookingForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    mobile: '',
    from: '',
    to: '',
    date: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for booking successfully!");

    // ... (Rest of your code)

    // Reset the form to its initial state
    setFormData(initialFormData);
  };

  return (
    <div className="bg-primary shadow-md rounded px-4 md:px-8 py-8 md:py-16 mb-4 border mx-auto mt-20 max-w-[900px]">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Book Easy Ride with Us</h2>

      {formSubmitted && (
        <div className="text-green-500 mb-4">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} id='book'>
        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* ... (Your input fields) */}
        </div>

        {/* Button */}
        <div className='mt-4 flex justify-center items-center'>
          <button
            type="submit"
            className="bg-black text-white p-2 w-full md:w-40 rounded-md hover:bg-white hover:text-black text-xl"
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default  BookingForm;
