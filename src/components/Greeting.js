//2. `useEffect` Hook (Complexitate Scazuta):

import React, { useEffect } from "react";

const Greeting = () => {
  useEffect(() => {
    console.log("Component is mounted.");
    return () => {
      console.log("Component is unmounted.");
    };
  }, []);

  return <h1>Hello, React!</h1>;
};

export default Greeting;


//- În acest exemplu, `useEffect` este utilizat pentru a afișa mesaje în consolă atunci când componenta este montată (`Component is mounted.`) și demontată (`Component is unmounted.`).
//- Efectul nu are nicio dependență, așa că funcția returnată este apelată doar când componenta se demontează.
