import React, { useContext, createContext } from "react";
import data from "../data";

const PersonContext = createContext();

export default function UseContext() {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <PersonContext.Provider value={{ removeItem, people }}>
      <h2>PropDriling</h2>
      <List />
    </PersonContext.Provider>
  );
}

const List = () => {
  const { people } = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const data = useContext(PersonContext);
  return (
    <div>
      <h2>{name} </h2>
      <button onClick={() => data.removeItem(id)}>remove</button>
    </div>
  );
};
