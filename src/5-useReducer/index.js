import React, { useState, useReducer } from "react";
import Model from "./model";
import { reducer } from "./reducer";

const initialState = {
  people: [],
  isModleOpen: false,
  modelContent: "",
};

function Index() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "testing", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "empty" });
    }
  };
  const removeModel = () => {
    dispatch({ type: "remove_model" });
  };
  return (
    <>
      <form
        action=""
        style={{ width: "80vw", margin: "5rem auto", textAlign: "center" }}
      >
        {state.isModleOpen && (
          <Model removeModel={removeModel} modelContent={state.modelContent} />
        )}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          submit
        </button>
      </form>
      <div style={{ width: "80vw", margin: "5rem auto", textAlign: "center" }}>
        {state.people.map((person) => {
          const { id, name } = person;
          return (
            <div
              key={id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h3>{name}</h3>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={() => dispatch({ type: "remove_item", payload: id })}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Index;
