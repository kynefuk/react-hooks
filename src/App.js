import React, {useState} from 'react';

const App = () =>  {
  const initialStates = {
    name: '',
    price: 1000
  }

  const [name, setName] = useState(initialStates.name)
  const [price, setPrice] = useState(initialStates.price)
  return (
    <div>
      <p>name: {name}</p>
      <p>price: {price}</p>
      <button onClick={() => setPrice(price + 100)}>+100</button>
      <input value={name} onChange={e => setName(e.target.value)}></input>
    </div>
  )
}

export default App;