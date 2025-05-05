import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const sampleCourses = [
  { id: 1, title: 'Web Development', description: 'Learn HTML, CSS, JavaScript, and React. This course covers frontend and basic backend development with projects.', image: 'web-dev.jpg' },
  { id: 2, title: 'Python for Data Science', description: 'Master data analysis with Python, including NumPy, Pandas, and data visualization with Matplotlib.', image: 'python.jpg' },
  { id: 3, title: 'Java Programming', description: 'Understand Object-Oriented Programming with Java. Includes JDBC, Spring Boot, and real-time applications.', image: 'java.jpg' },
];

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const course = sampleCourses.find(c => c.id === parseInt(id || ''));

  if (!course) {
    return <div className="p-6">Course not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <button
        onClick={() => navigate('/courses')}
        className="text-blue-500 mb-4 inline-flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
        Back to Courses
      </button>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
          <img src={`../assets/${course.image}`} alt={course.title} className="w-full rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">{course.title}</h2>
          <p className="text-lg text-gray-600 mb-4">{course.description}</p>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Hands-on projects</li>
              <li>Real-world applications</li>
              <li>Expert instructors</li>
              <li>Certificate of completion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
