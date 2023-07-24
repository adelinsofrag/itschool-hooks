//### Exemple cu complexitate medie:

//1. `useState` Hook (Complexitate Medie):

import React, { useState } from "react";

const MultipleInputsForm = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", age: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
      <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
      <p>
        {formData.firstName} {formData.lastName}, Age: {formData.age}
      </p>
    </div>
  );
};

export default MultipleInputsForm;


//- În acest exemplu, folosim `useState` pentru a gestiona un obiect `formData` care conține trei câmpuri: `firstName`, `lastName` și `age`.
//- Funcția `handleInputChange` este folosită pentru a actualiza starea `formData` în funcție de modificările din câmpurile de input.
//- Valoarea din fiecare câmp de input este preluată din starea `formData` și este afișată într-un paragraf.
