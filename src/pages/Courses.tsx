import React from 'react';
import CourseCard from './CourseCard';

const sampleCourses = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Learn HTML, CSS, JavaScript, React, and build real-world websites.',
  },
  {
    id: 2,
    title: 'Python for Data Science',
    description: 'Master Python with NumPy, Pandas, Matplotlib, and data analysis tools.',
  },
  {
    id: 3,
    title: 'Java Programming',
    description: 'Understand OOP concepts, JDBC, and build Spring Boot applications.',
  },
];

const Courses: React.FC = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    {/* Page Title */}
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-blue-800 mb-2">Our Courses</h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        Choose from our industry-focused courses designed to build your IT career. Learn from experts, build real projects, and get certified.
      </p>
    </div>

    {/* Course Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sampleCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </div>
);

export default Courses;
