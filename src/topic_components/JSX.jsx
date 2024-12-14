import React, { useContext } from "react";
import { LangContext } from "../context/LangProvider.jsx";
import localizationJSX from "../localization/JSX.js";

const JSXExplanation = () => {
  const { lang } = useContext(LangContext);
  const content = localizationJSX[lang];
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-green-600 dark:text-green-400">
          {content.title}
        </h1>

        {/* Explanation Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">
            {content.whatIsJSX}
          </h2>
          <p className="text-lg">{content.jsxExplanation}</p>

          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">
            {content.jsxRules}
          </h2>
          <ul className="list-disc pl-6">
            {content.jsxRulesList.map((rule, index) => (
              <li key={index} className="text-lg">
                {rule}
              </li>
            ))}
          </ul>
        </section>

        {/* Code Snippet Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">
            {content.jsxCodeExample}
          </h2>
          <p className="text-lg">{content.jsxCodeExplanation}</p>
          <pre className="bg-gray-800 p-4 rounded-lg text-white">
            <code>
              {`import React from 'react';
    
    const Welcome = () => {
      const name = 'John Doe';
      return (
        <div className="bg-green-100 dark:bg-green-700 p-4 rounded-md">
          <h1 className="text-2xl text-green-600 dark:text-green-300">
            Hello, {name}!
          </h1>
          <p className="text-lg text-green-700 dark:text-green-200">
            Welcome to the world of JSX.
          </p>
        </div>
      );
    };
    
    export default Welcome;`}
            </code>
          </pre>
        </section>

        {/* Scenario Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">
            {content.commonScenarios}
          </h2>
          <p className="text-lg">{content.conditionalRendering}</p>
          <pre className="bg-gray-800 p-4 rounded-lg text-white">
            <code>
              {`const isLoggedIn = true;
    
    return (
      <div>
        {isLoggedIn ? (
          <p className="text-green-600 dark:text-green-300">Welcome back!</p>
        ) : (
          <p className="text-red-600 dark:text-red-300">Please log in</p>
        )}
      </div>
    );`}
            </code>
          </pre>

          <p className="text-lg">{content.listRendering}</p>
          <pre className="bg-gray-800 p-4 rounded-lg text-white">
            <code>
              {`const items = ['Apple', 'Banana', 'Cherry'];
    
    return (
      <ul>
        {items.map(item => (
          <li key={item} className="text-green-600 dark:text-green-300">
            {item}
          </li>
        ))}
      </ul>
    );`}
            </code>
          </pre>
        </section>
      </div>
    </div>
  );
};

export default JSXExplanation;
