// src/components/CourseCard.tsx
import React from 'react';
import { Course } from '../types/Course';

interface Props {
  course: Course;
}

const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 hover:border-blue-500 mt-10">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col justify-between h-full">
        <h3 className="text-2xl font-bold text-blue-800 mb-2">{course.title}</h3>
        <p className="text-gray-700 mb-3">{course.description}</p>

        <ul className="text-sm text-gray-600 space-y-1 mb-3">
          <li><span className="font-medium text-gray-800">📆 Duration:</span> {course.duration}</li>
          <li><span className="font-medium text-gray-800">👨‍🏫 Instructor:</span> {course.instructor}</li>
          <li><span className="font-medium text-gray-800">✅ Prerequisite:</span> {course.prerequisite}</li>
        </ul>

        <p className="text-sm text-gray-600 mb-4">{course.details}</p>

        <button
          className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          onClick={() => alert(`Enrolled in ${course.title}!`)}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
