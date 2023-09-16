import React, { useState } from 'react';
// import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };
  return (
    <div className="flex justify-center h-screen items-center bg-emerald-400">
      <div className="p-5 rounded-xl bg-emerald-700">
        <input className=' w-50 p-2 rounded-lg' type="text" value={input} readOnly />
        <div className="grid grid-cols-4">
          {['1', '2', '3', '+'].map((val) => (
            <button className='p-4 text-sm bg-emerald-700 rounded-full m-1 drop-shadow-md' onClick={() => handleClick(val)} key={val}>{val}</button>
          ))}
          {['4', '5', '6', '-'].map((val) => (
            <button className='p-4 text-sm bg-emerald-700 rounded-full m-1 drop-shadow-md' onClick={() => handleClick(val)} key={val}>{val}</button>
          ))}
          {['7', '8', '9', '*'].map((val) => (
            <button className='p-4 text-sm bg-emerald-700 rounded-full m-1 drop-shadow-md' onClick={() => handleClick(val)} key={val}>{val}</button>
          ))}
          {['C', '0', '=', '/'].map((val, index) => (
            <button
              className='p-4 text-sm bg-emerald-700 rounded-full m-1 drop-shadow-md'
              onClick={
                val === 'C'
                  ? handleClear
                  : val === '='
                  ? handleEvaluate
                  : () => handleClick(val)
              }
              key={index}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
