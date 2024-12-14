import React from "react";
import "tailwindcss/tailwind.css";

function ReactHooksComponent() {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-200">
      <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold mb-6 text-center">React Hooks Overview</h1>
      <div className="space-y-8">
        <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-2">useState</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Allows you to add state management to functional components.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto">
            <code className="text-sm text-gray-800 dark:text-gray-300">
              {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
            </code>
          </pre>
        </div>
        <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-2">useEffect</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Enables you to perform side effects in function components.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto">
            <code className="text-sm text-gray-800 dark:text-gray-300">
              {`import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Seconds: {seconds}</p>;
}`}
            </code>
          </pre>
        </div>
        <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-2">useContext</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Allows you to consume React context values in function components.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto">
            <code className="text-sm text-gray-800 dark:text-gray-300">
              {`import React, { useContext, createContext } from 'react';

const ThemeContext = createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return <p>Current theme: {theme}</p>;
}`}
            </code>
          </pre>
        </div>
        <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-2">useRef</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Provides a mutable reference to a DOM element or value that persists across renders.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto">
            <code className="text-sm text-gray-800 dark:text-gray-300">
              {`import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}`}
            </code>
          </pre>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ReactHooksComponent;
