import React from "react";
import data from "../data";

function UseState2() {
  const [peoples, setPeoples] = React.useState(data);
  const removeItem = (id) => {
    const newPeople = peoples.filter((people) => people.id !== id);
    setPeoples(newPeople);
  };

  return (
    <>
      {peoples.map((people) => {
        const { id, name } = people;
        return (
          <div
            key={id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>removitem</button>
          </div>
        );
      })}
      <button onClick={() => setPeoples([])}>clear the list</button>
    </>
  );
}

export default UseState2;
