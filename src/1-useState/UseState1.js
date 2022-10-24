import React from "react";

function UseState1() {
  const [title, setTitle] = React.useState("this is a title");
  const clickHandle = () => {
    if (title === "this is a title") {
      setTitle("title changed");
    } else {
      setTitle("this is a title");
    }
  };
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={clickHandle}>change the title</button>
    </div>
  );
}

export default UseState1;
