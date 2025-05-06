// src/pages/CourseDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Course } from '../types/Course';

const sampleCourses: Course[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'HTML, CSS, JavaScript, React',
    imageUrl: '/web.jpg', // ✅ no "src", no "public"
    duration: '3 months',
    details: 'Full-stack basics and project-based learning.',
    instructor: 'John Doe',
    prerequisite: 'Basic computer knowledge',
  },
  {
    id: 2,
    title: 'Python for Data Science',
    description: 'NumPy, Pandas, Matplotlib',
    imageUrl: '/python.jpg', // ✅ correct path for public image
    duration: '2.5 months',
    details: 'Data manipulation and visualization in Python.',
    instructor: 'Jane Smith',
    prerequisite: 'Python basics',
  },
  {
    id: 3,
    title: 'Java Programming',
    description: 'OOP, JDBC, Spring Boot',
    imageUrl: '/java.webp', // ✅ correct
    duration: '4 months',
    details: 'Java programming with Spring Boot & JDBC.',
    instructor: 'Alex Johnson',
    prerequisite: 'C or C++ knowledge preferred',
  },
];


const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = sampleCourses.find((c) => c.id === parseInt(id || ''));

  if (!course) {
    return <div className="p-6 text-center text-red-500">Course not found.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-xl">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 className="text-4xl font-bold text-blue-700 mb-4">{course.title}</h2>
      <p className="text-lg text-gray-700 mb-2">{course.description}</p>
      <ul className="text-sm text-gray-600 mb-4">
        <li><strong>Duration:</strong> {course.duration}</li>
        <li><strong>Instructor:</strong> {course.instructor}</li>
        <li><strong>Prerequisite:</strong> {course.prerequisite}</li>
      </ul>
      <p className="text-base text-gray-700 mb-6">{course.details}</p>
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        onClick={() => alert('Enrolled in the course!')}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetails;
