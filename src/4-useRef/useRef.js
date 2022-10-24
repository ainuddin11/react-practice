import React, { useRef, useEffect } from "react";

const UseRef = () => {
  const container = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(container);
  };

  useEffect(() => {
    console.log(divContainer.current.innerText);
  });
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={container} />
        <button type="submit">submit</button>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRef;
