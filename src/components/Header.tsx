
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">
          <Link to="/">Веб-оптимизация</Link>
        </h1>
        <nav className="flex gap-6">
          <Link to="/" className="hover:underline transition-all">
            Главная
          </Link>
          <Link to="/techniques" className="hover:underline transition-all">
            Техники оптимизации
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
