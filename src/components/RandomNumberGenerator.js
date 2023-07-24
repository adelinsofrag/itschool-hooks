

//2. `useEffect` Hook (Complexitate Medie):

import React, { useEffect, useState } from "react";

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;

    const generateRandomNumber = () => {
      setRandomNumber(Math.floor(Math.random() * 100));
    };

    if (isRunning) {
      interval = setInterval(generateRandomNumber, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <p>Random Number: {randomNumber}</p>
      <button onClick={handleToggle}>{isRunning ? "Stop" : "Start"}</button>
    </div>
  );
};
export default RandomNumberGenerator;

//- În acest exemplu, `useEffect` este utilizat pentru a genera un număr aleator la fiecare 1 secundă, doar dacă butonul "Start" este apăsat.
//- Când utilizatorul apasă butonul "Stop", generarea numerelor aleatoare se oprește.
//- Apăsând din nou butonul "Start", generarea continuă de la numărul curent.
