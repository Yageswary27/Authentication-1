import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCode } from 'react-icons/fa';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: 'webdev',
  });

  const handleJoinCourses = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-200 via-purple-400 to-indigo-700 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl font-extrabold mb-4 text-center leading-tight drop-shadow-lg">
        Welcome to IT Training Academy
      </h1>
      <p className="text-lg mb-8 text-center max-w-3xl text-white/90">
        Master the skills you need to succeed. Join industry-led IT courses today.
      </p>
      <button
        onClick={handleJoinCourses}
        className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-xl shadow-lg text-lg hover:bg-yellow-500 transform hover:scale-105 transition"
      >
        Join Our Courses
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in">
          <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-8 max-w-md w-full transform scale-95 animate-slide-up">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register for a Course</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <div className="flex items-center border rounded-lg px-3">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full py-2 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="flex items-center border rounded-lg px-3">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full py-2 focus:outline-none"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
                <div className="flex items-center border rounded-lg px-3">
                  <FaCode className="text-gray-400 mr-2" />
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full py-2 focus:outline-none bg-transparent"
                  >
                    <option value="webdev">Web Development</option>
                    <option value="python">Python for Data Science</option>
                    <option value="java">Java Programming</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-4 space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
