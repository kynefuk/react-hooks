import React, {useState} from 'react';

const App = () =>  {
  const initialStates = {
    name: '',
    price: 1000
  }

  const [state, setState] = useState(initialStates)
  const {name, price} = state

  return (
    <div>
      <p>name: {name}</p>
      <p>price: {price}</p>
      <button onClick={() => setState({...state, price: price + 100})}>+100</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}></input>
    </div>
  )
}

export default App;