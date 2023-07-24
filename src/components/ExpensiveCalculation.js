
//4. `useMemo` Hook (Complexitate Medie):

import React, { useState, useMemo } from "react";

const ExpensiveCalculation = () => {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);

  const expensiveResult = useMemo(() => {
    console.log("Calculating...");
    // Expensive calculation based on x and y
    return x * y;
  }, [x, y]);

  return (
    <div>
      <input type="number" value={x} onChange={(e) => setX(Number(e.target.value))} />
      <input type="number" value={y} onChange={(e) => setY(Number(e.target.value))} />
      <p>Result: {expensiveResult}</p>
    </div>
  );
};
export default ExpensiveCalculation;

//- În acest exemplu, `useMemo` este folosit pentru a memora rezultatul unei operații costisitoare (înmulțirea lui `x` cu `y`).
//- Funcția `expensiveResult` este apelată doar când `x` sau `y` se schimbă, reducând astfel costurile operației costisitoare.
//- Rezultatul este afișat în paragraf, iar utilizatorul poate modifica valorile câmpurilor de input pentru a recalcule rezultatul.