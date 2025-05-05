import React from 'react';

interface Course {
  id: number;
  title: string;
  description: string;
}

interface Props {
  course: Course;
}

const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{course.title}</h2>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  );
};

export default CourseCard;
