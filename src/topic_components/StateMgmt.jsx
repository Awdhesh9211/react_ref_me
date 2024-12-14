import React, { useState } from 'react';

const StateManagementExample = () => {
  // State definitions for various types of data
  const [stringState, setStringState] = useState('Hello, World!');
  const [integerState, setIntegerState] = useState(0);
  const [booleanState, setBooleanState] = useState(false);
  const [arrayState, setArrayState] = useState([1, 2, 3]);
  const [objectState, setObjectState] = useState({ name: 'John', age: 25 });

  // Input handling states for form elements
  const [inputValue, setInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [radioValue, setRadioValue] = useState('Female');

  // Login state management
  const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Details:', loginDetails);
    alert(`Hello ${loginDetails.username}`);
    const logind={username:'',password:''}
    setLoginDetails({...logind});
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white dark:bg-gray-800 text-black dark:text-white">
      <h2 className="text-xl font-bold mb-5">React State Management Example</h2>

      {/* State Explanation and Code Snippets */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold">1. What is State in React?</h3>
        <p className="mt-2">
          State is an object in React that holds data and controls the behavior of a component. It allows components to 
          remember information between renders.
        </p>
      </div>

      {/* Handling String Data */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold">2. Data Handled by State</h3>
        <h4 className="font-semibold">- String</h4>
        <pre className="bg-gray-800 p-4 rounded-lg text-white dark:text-black dark:bg-white">
        <code>{`
const [stringState, setStringState] = useState('Hello, World!');
<p >String state value: {stringState}</p>
        `}
        </code>
        </pre>
        <p >String state value: {stringState}</p>
      </div>

      {/* Handling Integer Data */}
      <div className="mb-8">
        <h4 className="font-semibold">- Integer</h4>
        <pre className="bg-gray-800 p-4 rounded-lg text-white dark:text-black dark:bg-white">
        <code>{`
const [integerState, setIntegerState] = useState(0);
<p>Integer state value: {integerState}</p>
<button
  className="bg-blue-500 text-white p-2 rounded mt-2"
  onClick={() => setIntegerState(integerState + 1)}
>
  Increment
</button>
        `}
        </code>
        </pre>
        <p>Integer state value: {integerState}</p>
        <button
          className="bg-blue-500 text-white p-2 rounded mt-2"
          onClick={() => setIntegerState(integerState + 1)}
        >
          Increment
        </button>
      </div>

      {/* Handling Boolean Data */}
      <div className="mb-8">
        <h4 className="font-semibold">- Boolean</h4>
        <pre className="bg-gray-800 p-4 rounded-lg text-white dark:text-black dark:bg-white overflow-x-scroll w-full">
        <code  >
            {`
const [booleanState, setBooleanState] = useState(false);
<p>Boolean state value: {booleanState ? 'True' : 'False'}</p>
<button
  className="bg-green-500 text-white p-2 rounded mt-2"
  onClick={() => setBooleanState(!booleanState)}
>
  Toggle Boolean
</button>
            `}
        </code>
        </pre>
        <p>Boolean state value: {booleanState ? 'True' : 'False'}</p>
        <button
          className="bg-green-500 text-white p-2 rounded mt-2"
          onClick={() => setBooleanState(!booleanState)}
        >
          Toggle Boolean
        </button>
      </div>

      {/* Handling Array Data */}
      <div className="mb-8">
        <h4 className="font-semibold">- Array</h4>
        <pre className="bg-gray-800 p-4 rounded-lg text-white dark:text-black dark:bg-white">
        <code >{
            `
const [arrayState, setArrayState] = useState([1, 2, 3]);
<p>Array state value: {JSON.stringify(arrayState)}</p>
<button
  className="bg-purple-500 text-white p-2 rounded mt-2"
  onClick={() => setArrayState([...arrayState, arrayState.length + 1])}
>
  Add to Array
</button>
            `
            }
        </code>
        </pre>
        <p>Array state value: {JSON.stringify(arrayState)}</p>
        <button
          className="bg-purple-500 text-white p-2 rounded mt-2"
          onClick={() => setArrayState([...arrayState, arrayState.length + 1])}
        >
          Add to Array
        </button>
      </div>

      {/* Handling Object Data */}
      <div className="mb-8">
        <h4 className="font-semibold">- Object</h4>
        <pre className="bg-gray-800 p-4 rounded-lg text-white dark:text-black dark:bg-white">
        <code >{`
const [objectState, setObjectState] = useState({ username: 'John', age: 25 })
<p>Object state value: {JSON.stringify(objectState)}</p>
<button
  className="bg-yellow-500 text-white p-2 rounded mt-2"
  onClick={() => setObjectState({ ...objectState, age: objectState.age + 1 })}
>
  Increment Age
</button>
        `}</code>
        </pre>
        <p>Object state value: {JSON.stringify(objectState)}</p>
        <button
          className="bg-yellow-500 text-white p-2 rounded mt-2"
          onClick={() => setObjectState({ ...objectState, age: objectState.age + 1 })}
        >
          Increment Age
        </button>
      </div>

      {/* State with Input, Checkbox, Dropdown, Select, and Radio */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold">3. State with Input, Checkbox, Dropdown, Select, and Radio</h3>
        
        {/* Input Field */}
        <div className="mb-4">
          <label className="block">Input:</label>
          {/* CODE  */}
          <pre className="bg-gray-800 p-4 rounded-lg text-white dark:text-black dark:bg-white">
          <code className='overflow-x-auto'>
            {
                `
<input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    className="border p-2 mt-2 w-full"
/>
<p>Input state: {inputValue}</p>
                `
            }
          </code>
          </pre>
          {/* END CODE  */}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border p-2 mt-2 w-full dark:text-black"
          />
          <p>Input state: {inputValue}</p>
        </div>

        {/* Checkbox */}
        <div className="mb-4">
          <label className="block">Checkbox:</label>
          {/* CODE  */}
          <pre className="bg-gray-800 p-4 rounded-lg text-white dark:text-black dark:bg-white">
          <code className='overflow-x-auto'>
            {
                `
<input
    type="checkbox"
    checked={checkboxValue}
    onChange={(e) => setCheckboxValue(e.target.checked)}
    className="mt-2"
/>
<p>Checkbox state: {checkboxValue ? 'Checked' : 'Unchecked'}</p>
                `
            }
          </code>
          </pre>
          {/* END CODE  */}
          <input
            type="checkbox"
            checked={checkboxValue}
            onChange={(e) => setCheckboxValue(e.target.checked)}
            className="mt-2"
          />How are You? if not Fine Than checked the box...
          <p>Now You are Fine : {checkboxValue ? 'Now You are Fine' : 'Unchecked'}</p>
        </div>

        {/* Dropdown / Select */}
        <div className="mb-4">
          <label className="block">Select:</label>
          {/* CODE  */}
          <pre className="bg-gray-800 p-4 rounded-lg text-white dark:text-black dark:bg-white">
          <code className='overflow-x-auto'>
            {
                `
<select
    value={selectedOption}
    onChange={(e) => setSelectedOption(e.target.value)}
    className="border p-2 mt-2 w-full"
    >
    <option value="">Select an option</option>
    <option value="UP">UP</option>
    <option value="BIHAR">Bihar</option>
</select>
<p>You are from: {selectedOption}</p>
                `
            }
          </code>
          </pre>
          {/* END CODE  */}
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border p-2 mt-2 w-full dark:text-black"
          >
            <option value="">Select an option</option>
            <option value="UP">UP</option>
            <option value="BIHAR">BIHAR</option>
          </select>
          <p>You Are from: {selectedOption}</p>
        </div>

        {/* Radio Buttons */}
        <div className="mb-4">
          <label className="block">Radio Buttons:</label>
          {/* CODE  */}
          <pre className="bg-gray-800 p-4 rounded-lg text-white dark:text-black dark:bg-white">
          <code className='overflow-x-auto'>
            {
                `
<input
    type="radio"
    name="radioGroup"
    value="Male"
    checked={radioValue === 'Male'}
    onChange={() => setRadioValue('Male')}
    className="mr-2"
    />
    Male
    <input
      type="radio"
      name="radioGroup"
      value="Female"
      checked={radioValue === 'Female'}
      onChange={() => setRadioValue('Female')}
      className="ml-4 mr-2"
    />
    Female
<p>Selected radio: {radioValue}</p>
                `
            }
          </code>
          </pre>
          {/* END CODE  */}
          <input
            type="radio"
            name="radioGroup"
            value="Male"
            checked={radioValue === 'Male'}
            onChange={() => setRadioValue('Male')}
            className="mr-2"
          />
          Male
          <input
            type="radio"
            name="radioGroup"
            value="Female"
            checked={radioValue === 'Female'}
            onChange={() => setRadioValue('Female')}
            className="ml-4 mr-2"
          />
          Female
          <p>Selected radio: {radioValue}</p>
        </div>
      </div>

      {/* Login Example Using State */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold">4. Scenario Example - Login</h3>
        {/* CODE  */}
        <pre className="bg-gray-800 p-4 rounded-lg text-white dark:text-black dark:bg-white">
          <code className='overflow-x-auto'>
            {
                `
<form onSubmit={handleSubmit} className="bg-gray-100 p-5 rounded">
    <div className="mb-4">
      <label className="block">Username:</label>
      <input
        type="text"
        value={loginDetails.username}
        onChange={(e) => setLoginDetails({ ...loginDetails, username: e.target.value })}
        className="border p-2 w-full"
      />
    </div>
    <div className="mb-4">
      <label className="block">Password:</label>
      <input
        type="password"
        value={loginDetails.password}
        onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
        className="border p-2 w-full"
      />
    </div>
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded"
    >
      Login
    </button>
</form>
                `
            }
          </code>
          </pre>
          {/* END CODE  */}
        <form onSubmit={handleSubmit} className="bg-gray-100 p-5 rounded dark:text-black mt-6">
            <h3 className='text-center'>Login</h3>
          <div className="mb-4">
            <label className="block">Username:</label>
            <input
              type="text"
              value={loginDetails.username}
              onChange={(e) => setLoginDetails({ ...loginDetails, username: e.target.value })}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block">Password:</label>
            <input
              type="password"
              value={loginDetails.password}
              onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
              className="border p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default StateManagementExample;
