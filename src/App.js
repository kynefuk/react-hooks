import React, {useState} from 'react';

const App = () =>  {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const increment2 = () => {
    setCount(previous => {
      return previous + 2
    })
  }

  const reset = () => {
    setCount(0)
  }

  const divideThree = () => {
    setCount(previous => {
      return previous % 3 === 0 ? previous / 3 : previous
    })
  }
  return (
    <>
        <div>
            count: {count}
        </div>
        <button onClick={increment}>+1</button>
        <button onClick={increment2}>+2</button>
        <button onClick={reset}>Reset</button>
        <button onClick={divideThree}>3の倍数</button>
    </>
  ); 
}

export default App;