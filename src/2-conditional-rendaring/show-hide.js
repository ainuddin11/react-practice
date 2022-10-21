import React from "react";

const ShowHide = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div style={{ width: "80vw", margin: "50px auto", textAlign: "center" }}>
      <button onClick={() => setShow(!show)}>show/hide</button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = React.useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h3>size: ${size}</h3>
    </div>
  );
};

export default ShowHide;
