//3. `useReducer` Hook (Complexitate Scazuta):

//- În acest exemplu, `useReducer` este utilizat pentru a gestiona starea (`count`) și pentru a actualiza valoarea acestuia în funcție de acțiunile primite (`INCREMENT` sau `DECREMENT`).
//- Apăsând butonul "Increment", starea `count` este incrementată cu 1, iar apăsând butonul "Decrement", starea `count` este decrementată cu 1.

import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;