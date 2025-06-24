import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const isAuthenticated = localStorage.getItem('authToken');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Brainstorm</h1>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-gray-900 px-3 py-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Welcome to Brainstorm
            </h1>
            
            {isAuthenticated ? (
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                    logged in
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Projects</h3>
                    <p className="text-gray-600">Manage your brainstorming projects</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Ideas</h3>
                    <p className="text-gray-600">Capture and organize your ideas</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Collaborate</h3>
                    <p className="text-gray-600">Work with your team</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  tailbar
                </p>
                <div className="space-x-4">
                  <Link
                    to="/signup"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-700"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/login"
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-lg hover:bg-gray-50"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;