//3. `useReducer` Hook (Complexitate Medie):

import React, { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIRSTNAME":
      return { ...state, firstName: action.payload };
    case "SET_LASTNAME":
      return { ...state, lastName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const UserProfileForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  return (
    <div>
      <input type="text" name="firstName" value={state.firstName} onChange={handleInputChange} />
      <input type="text" name="lastName" value={state.lastName} onChange={handleInputChange} />
      <input type="email" name="email" value={state.email} onChange={handleInputChange} />
      <p>First Name: {state.firstName}</p>
      <p>Last Name: {state.lastName}</p>
      <p>Email: {state.email}</p>
    </div>
  );
};
export default UserProfileForm;
// Explicație (Explanation in Romanian):
//- În acest exemplu, `useReducer` este folosit pentru a gestiona starea unui formular cu trei câmpuri: `firstName`, `lastName` și `email`.
//- Funcția `handleInputChange` este utilizată pentru a actualiza starea în funcție de modificările din câmpurile de input. Numele câmpurilor sunt preluate din atributul `name` al fiecărui input.
//- Reducer-ul primește un `action` care specifică tipul acțiunii (`SET_FIRST_NAME`, `SET_LAST_NAME` sau `SET_EMAIL`) și o valoare `payload` care reprezintă valoarea modificată din input.
