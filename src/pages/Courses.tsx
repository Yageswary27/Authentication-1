// src/pages/Courses.tsx
import React from 'react';
import CourseCard from './CourseCard';
import { Course } from '../types/Course';

const sampleCourses: Course[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'HTML, CSS, JavaScript, React',
    imageUrl: 'https://via.placeholder.com/400x200?text=Web+Development',
    duration: '3 months',
    details: 'Full-stack basics and project-based learning.',
    instructor: 'John Doe',
    prerequisite: 'Basic computer knowledge',
  },
  {
    id: 2,
    title: 'Python for Data Science',
    description: 'NumPy, Pandas, Matplotlib',
    imageUrl: 'https://via.placeholder.com/400x200?text=Python+for+Data+Science',
    duration: '2.5 months',
    details: 'Data manipulation and visualization in Python.',
    instructor: 'Jane Smith',
    prerequisite: 'Python basics',
  },
  {
    id: 3,
    title: 'Java Programming',
    description: 'OOP, JDBC, Spring Boot',
    imageUrl: 'https://via.placeholder.com/400x200?text=Java+Programming',
    duration: '4 months',
    details: 'Java programming with Spring Boot & JDBC.',
    instructor: 'Alex Johnson',
    prerequisite: 'C or C++ knowledge preferred',
  },
];

const Courses: React.FC = () => (
  <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {sampleCourses.map((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
  </div>
);

export default Courses;
