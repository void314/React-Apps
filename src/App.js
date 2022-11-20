import React from 'react';
import './App.scss';

function App() {

  const [count, setCount] = React.useState(0)

  return (
    <div className="App">
      <div className='counter-wrapper'>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)} className="counter-minus">- Минус</button>
        <button onClick={() => setCount(count + 1)} className="counter-plus">Плюс +</button>
      </div>
      <button onClick={() => setCount(0)} className="counter-erase">X</button>
    </div>
  );
}

export default App;