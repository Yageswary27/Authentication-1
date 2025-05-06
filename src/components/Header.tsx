import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">IT Training Academic</h1>
    <nav className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header>
);

export default Header;
