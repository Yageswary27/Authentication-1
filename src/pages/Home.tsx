import React, { useState } from 'react';
import {
  FaUser, FaEnvelope, FaCode, FaLaptopCode,
  FaChalkboardTeacher, FaCertificate, FaClock
} from 'react-icons/fa';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', course: 'webdev' });

  const handleJoinCourses = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
  };

  return (
    <div className="p-6 bg-gradient-to-br from-teal-400 via-purple-600 to-indigo-800 min-h-screen flex flex-col items-center text-white">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-100 drop-shadow-2xl">
            Welcome to IT Training Academic
          </h1>
          <p className="text-lg mb-8 max-w-2xl text-white/90">
            Master the skills you need to succeed. Join industry-led IT courses today.
          </p>
          <button
            onClick={handleJoinCourses}
            className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-xl shadow-xl text-lg hover:bg-yellow-600 hover:shadow-2xl transition transform hover:scale-105"
          >
            Join Our Courses
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src="src/banner jpg.avif"
            alt="IT Training"
            className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white/30 hover:shadow-xl transition duration-500"
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="mt-20 w-full max-w-6xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          🌟 Our Top Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[ 
            { icon: <FaLaptopCode />, title: 'Practical Projects', desc: 'Work on real-world projects to build your skills hands-on and boost your resume.' },
            { icon: <FaChalkboardTeacher />, title: 'Expert Trainers', desc: 'Learn from experienced IT professionals and certified instructors.' },
            { icon: <FaCertificate />, title: 'Certified Courses', desc: 'Get verified certifications upon course completion to showcase your expertise.' },
            { icon: <FaClock />, title: 'Flexible Timing', desc: 'Choose from weekday/weekend or online/offline classes to suit your schedule.' },
            { icon: <FaUser />, title: 'Personal Mentorship', desc: 'Get one-on-one support from mentors to clarify doubts and track progress.' },
            { icon: <FaCode />, title: 'Latest Curriculum', desc: 'Learn updated tools, languages, and frameworks that companies use today.' },
          ].map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition hover:ring-2 hover:ring-white/20 text-white text-center">
              <div className="text-5xl text-blue-200 mb-4 transition-transform hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/90">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-md w-full animate-fade-in-down">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register for a Course</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-300">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full py-2 bg-transparent focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-300">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full py-2 bg-transparent focus:outline-none"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              {/* Course */}
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
                <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-300">
                  <FaCode className="text-gray-400 mr-2" />
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full py-2 bg-transparent focus:outline-none"
                  >
                    <option value="webdev">Web Development</option>
                    <option value="python">Python for Data Science</option>
                    <option value="java">Java Programming</option>
                  </select>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
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
