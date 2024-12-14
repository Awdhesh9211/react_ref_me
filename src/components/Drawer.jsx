import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const topics = [
  "NodeJS Setup",
  "JSX",
  "State Management",
  "Hooks",
  "Props",
  "Context API",
];

const Drawer = ({ onSelectTopic, title="NodeJS Setup" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((prev) => !prev);

  return (
    <div>
      {/* Drawer Toggle Button */}
      <button
        className="fixed top-5 left-5 z-20 bg-white  text-black p-2 rounded-full shadow-lg focus:outline-none"
        onClick={toggleDrawer}
        aria-label="Toggle Drawer"
      >
        {isOpen ? <FaTimes className="h-6 w-6  " /> : <FaBars className="h-6 w-6" />}
      </button>

      {/* Drawer Content */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 z-10`}
        role="navigation"
        aria-hidden={!isOpen}
      >
        <div className="p-5 mt-10"> 
          <h2 className="text-lg font-semibold text-white mb-4">Topics</h2>
          <nav className="flex flex-col space-y-2">
            {topics.map((topic, index) => (
              <button
                key={index}
                className={`text-left text-sm p-2 rounded-lg transition-colors ${
                  topic === title
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => {
                  onSelectTopic(topic);
                  setIsOpen(false); // Close drawer on selection
                }}
              >
                {topic}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for closing the drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-5"
          onClick={toggleDrawer}
        />
      )}
    </div>
  );
};

export default Drawer;
