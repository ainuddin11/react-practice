import React from "react";
import data from "../data";

export default function Propdriling() {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <section>
      <h2>PropDriling</h2>
      <List people={people} removeItem={removeItem} />
    </section>
  );
}

const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            person={person}
            removeItem={removeItem}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ person, removeItem }) => {
  const { id, name } = person;
  return (
    <div>
      <h2>{name} </h2>
      <button onClick={() => removeItem(id)}>remove</button>
    </div>
  );
};
