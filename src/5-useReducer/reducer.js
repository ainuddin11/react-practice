export const reducer = (state, action) => {
  if (action.type === "testing") {
    const newPeople = action.payload;
    return {
      ...state,
      people: [...state.people, newPeople],
      isModleOpen: true,
      modelContent: "item added",
    };
  }
  if (action.type === "empty") {
    return {
      ...state,
      isModleOpen: true,
      modelContent: "please provide valid value",
    };
  }
  if (action.type === "remove_model") {
    return {
      ...state,
      isModleOpen: false,
    };
  }
  if (action.type === "remove_item") {
    const id = action.payload;
    const newPeople = state.people.filter((person) => person.id !== id);
    return {
      ...state,
      isModleOpen: true,
      people: newPeople,
      modelContent: "Item removed",
    };
  }

  throw new Error("no action match");
};
