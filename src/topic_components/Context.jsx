import React from "react";
import useTheme from "../context/Theme.js";
import { FaMoon, FaSun } from "react-icons/fa";



const ContextAPIExample = () => {
      const { themeMode, lightTheme, darkTheme } = useTheme();
    
        const onChangeTheme = () => {
            if (themeMode === 'dark') {
                lightTheme();
            } else {
                darkTheme();
            }
        };
  return (
      <div className={`min-h-screen`}>
        <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 p-6">
          <h1 className="text-2xl font-bold mb-4">Context API Example</h1>
          <p className="mb-4">
            Learn how to use the Context API to manage global state in React. Below, you'll find a live demonstration, code snippets, and an explanation.
          </p>
           <button
                      onClick={onChangeTheme}
                      className=" bg-gray-100 dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none"
                      title={themeMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  >
                      {themeMode === 'dark' ? (
                          <FaSun className="text-yellow-400 text-xl" />
                      ) : (
                          <FaMoon className="text-blue-600 text-xl" />
                      )}
                  </button>
          <CodeSnippet />
          <Explanation />
        </div>
        </div>
      </div>
  );
};


const CodeSnippet = () => (
  <div className="mt-6">
    <h2 className="text-xl font-semibold mb-2">Code Snippet</h2>
    <pre className="bg-gray-800 text-white p-4 rounded shadow overflow-auto">
      <code>
        {`
// Context creation
const ThemeContext = createContext();

// Providing the context
<ThemeContext.Provider value={{ theme, toggleTheme }}>
  {children}
</ThemeContext.Provider>

// Consuming the context
const { theme, toggleTheme } = useContext(ThemeContext);
      `}
      </code>
    </pre>
  </div>
);

const Explanation = () => (
  <div className="mt-6">
    <h2 className="text-xl font-semibold mb-2">Explanation</h2>
    <ul className="list-disc pl-6">
      <li>
        <strong>Context API:</strong> Allows passing data through the component tree without props drilling.
      </li>
      <li>
        <strong>Provider:</strong> Wraps the components to share state or functions.
      </li>
      <li>
        <strong>useContext Hook:</strong> Simplifies accessing context values in child components.
      </li>
    </ul>
  </div>
);

export default ContextAPIExample;
