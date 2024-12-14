import React from "react";

// PropsExample Component
const PropsExample = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold mb-4">Props Example</h1>

      {/* String Prop */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">String Prop</h2>
        <p className="mb-2">This prop passes a simple string to the component.</p>
        <code className="block bg-gray-200 dark:bg-gray-700 p-2 rounded mt-2">
          {`<PropsExample stringProp="Hello, World!" />`}
        </code>
      </div>

      {/* Boolean Prop */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Boolean Prop</h2>
        <p className="mb-2">This prop passes a true/false value to the component.</p>
        <code className="block bg-gray-200 dark:bg-gray-700 p-2 rounded mt-2">
          {`<PropsExample booleanProp={true} />`}
        </code>
      </div>

      {/* Object Prop */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Object Prop</h2>
        <p className="mb-2">This prop passes an object to the component.</p>
        <code className="block bg-gray-200 dark:bg-gray-700 p-2 rounded mt-2">
          {`<PropsExample objectProp={{ key: "value" }} />`}
        </code>
      </div>

      {/* Array Prop */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Array Prop</h2>
        <p className="mb-2">This prop passes an array to the component.</p>
        <code className="block bg-gray-200 dark:bg-gray-700 p-2 rounded mt-2">
          {`<PropsExample arrayProp={[1, 2, 3]} />`}
        </code>
      </div>

      {/* Function Prop */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Function Prop</h2>
        <p className="mb-2">This prop passes a function that can be executed within the component.</p>
        <code className="block bg-gray-200 dark:bg-gray-700 p-2 rounded mt-2">
          {`<PropsExample functionProp={() => alert("Hello!")} />`}
        </code>
      </div>

      {/* Ref Prop */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Ref Prop</h2>
        <p className="mb-2">This prop passes a reference to manipulate DOM elements.</p>
        <code className="block bg-gray-200 dark:bg-gray-700 p-2 rounded mt-2">
          {`<PropsExample refProp={inputRef} />`}
        </code>
      </div>
      </div>
    </div>
  );
};

export default PropsExample;
