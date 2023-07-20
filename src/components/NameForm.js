//### Exemple cu complexitate scăzută:

//1. `useState` Hook (Complexitate Scazuta):

import React, { useState } from "react";

const NameForm = () => {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default NameForm;
// Explicație (Explanation in Romanian):
//- În acest exemplu, folosim `useState` pentru a gestiona un singur câmp de input (`name`) în formular.
//- Atunci când utilizatorul introduce text în câmpul de input, funcția `handleInputChange` este apelată și actualizează starea `name` cu noul text introdus. Rezultatul se afișează în `<p>` cu mesajul "Hello, {name}!".
