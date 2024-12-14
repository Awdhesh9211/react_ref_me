import React, { useContext } from "react";
import { LangContext } from "../context/LangProvider.jsx";
import { langContentNodeJS_Setup } from "../localization/NodeJS_setup.js";


const NodeSetup = () => {
  const { lang } = useContext(LangContext);
  const content = langContentNodeJS_Setup[lang];

  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 min-h-screen p-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-green-700 dark:text-green-400 mb-4">
          {content.headerTitle}
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
          {content.headerDescription}
        </p>
      </header>

      {/* Installation Steps */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 border-b-2 border-green-500 pb-2 mb-4">
          {content.step1Title}
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          {content.step1Content.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Environment Variables Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 border-b-2 border-green-500 pb-2 mb-4">
          {content.step2Title}
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          {content.step2Content.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Optional Step for npm Setup */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 border-b-2 border-green-500 pb-2 mb-4">
          {content.step3Title}
        </h2>
        <p className="mb-4">{content.step3Content[0]}</p>
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded p-4 mt-2">
          <code className="block bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded mt-2">npm -v</code>
        </div>
        <p className="mt-4">{content.step3Content[1]}</p>
      </section>

      {/* Verify npm and node package setup */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 border-b-2 border-green-500 pb-2 mb-4">
          {content.step4Title}
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          {content.step4Content.map((text, index) => (
            <li key={index}>
              <code className="block bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded mt-2">{text}</code>
            </li>
          ))}
        </ol>
      </section>

      {/* Test Node.js Setup */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 border-b-2 border-green-500 pb-2 mb-4">
          {content.step5Title}
        </h2>
        <p className="mb-4">{content.step5Content[0]}</p>
        <pre className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded p-4 mt-2">
          <code className="text-sm bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded mt-2">
            console.log("Node.js is successfully installed!");
          </code>
        </pre>
        <p className="mt-4">{content.step5Content[1]}</p>
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded p-4 mt-2">
          <code className="block bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded mt-2">node app.js</code>
        </div>
        <p className="mt-4">{content.step5Content[2]}</p>
      </section>

      {/* Create React App Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 border-b-2 border-green-500 pb-2 mb-4">
          {content.step6Title}
        </h2>
        <p className="mb-4">{content.step6Content[0]}</p>
        <ol className="list-decimal list-inside space-y-4">
          {content.step6Details.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ol>
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded p-4 mt-2">
          <code className="block bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded mt-2">
            {content.step6Command}
          </code>
        </div>
        <p className="mt-4">{content.step6Verify}</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 dark:text-gray-400 mt-8 text-sm">
        {content.footer}
      </footer>
      </div>
    </div>
  );
};

export default NodeSetup;
