//4. `useMemo` Hook (Complexitate Scazuta):

import React, { useState, useMemo } from "react";

const Fibonacci = () => {
  const [n, setN] = useState(1);

  const fibonacciNumber = useMemo(() => {
    const fibonacci = (num) => {
      if (num <= 1) return num;
      return fibonacci(num - 1) + fibonacci(num - 2);
    };
    return fibonacci(n);
  }, [n]);

  return (
    <div>
      <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} />
      <p>
        The {n}th Fibonacci number is: {fibonacciNumber}
      </p>
    </div>
  );
};

export default Fibonacci;

//- În acest exemplu, `useMemo` este utilizat pentru a memora rezultatul numărului Fibonacci pentru un anumit număr (`n`).
//- Când utilizatorul modifică valoarea câmpului de input, funcția `fibonacciNumber` este recalculată doar dacă valoarea `n` se schimbă, reducând costurile de calcul pentru valori repetate.
