import React from "react";

function UseStateObjec() {
  const [obj, setObj] = React.useState({
    name: "Susan",
    age: 23,
    message: "random message",
  });
  const changMess = () => {
    setObj({ ...obj, message: "hello world" });
  };
  return (
    <>
      <div>
        <h3>{obj.name}</h3>
        <h3>{obj.age}</h3>
        <h3>{obj.message}</h3>
        <button onClick={() => changMess()}>change the message</button>
      </div>
    </>
  );
}

export default UseStateObjec;
