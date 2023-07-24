
//2. `useEffect` Hook (Complexitate Ridicată):

import React, { useEffect, useState } from "react";

const TypingIndicator = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setIsTyping(false);
    }, 2000);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [isTyping]);

  const handleInputChange = (event) => {
    setIsTyping(true);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      {isTyping && <p>Typing...</p>}
    </div>
  );
};
export default TypingIndicator;

//- În acest exemplu, `useEffect` este folosit pentru a seta un indicator (`isTyping`) pentru a afișa mesajul "Typing..." când utilizatorul scrie în câmpul de input.
//- Dacă utilizatorul nu mai scrie timp de 2 secunde, indicatorul `isTyping` revine la valoarea `false`, iar mesajul "Typing..." dispare.

