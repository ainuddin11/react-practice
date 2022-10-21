import React, { useState, useEffect } from "react";

function SortCircuite() {
  const [text, setText] = useState("d");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";
  return (
    <>
      {/* <h1>firstValue : {firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      {/* <h1>{text || "azad"}</h1> */}
      <h1>{text && "hello"}</h1>
      <button onClick={() => setIsError(!isError)}>toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error ....</p>
      ) : (
        <div>
          <h1>there is no error</h1>
        </div>
      )}
    </>
  );
}

export default SortCircuite;
