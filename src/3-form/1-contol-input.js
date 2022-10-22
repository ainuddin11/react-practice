import React, { useState, useEffect } from "react";

// export default function FromContol() {
//   const [firstName, setFristName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [people, setPeople] = React.useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (firstName && email) {
//       const person = {
//         ...people,
//         id: new Date().getTime().toString(),
//         firstName,
//         email,
//       };
//       setPeople([...people, person]);
//       setEmail("");
//       setFristName("");
//     } else {
//       console.log("please provide all inputs");
//     }
//   };

//   return (
//     <article
//       style={{ width: "80vw", margin: "3rem auto", textAlign: "center" }}
//     >
//       <form action="" onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "5px" }}>
//           <label htmlFor="FirstName">FristName : </label>
//           <input
//             type="text"
//             name="fristName"
//             value={firstName}
//             onChange={(e) => setFristName(e.target.value)}
//           />
//         </div>

//         <div style={{ marginBottom: "5px" }}>
//           <label htmlFor="email">Email : </label>
//           <input
//             type="text"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <button type="submit">submit</button>
//       </form>
//       {people.map((person) => {
//         const { id, firstName, email } = person;
//         return (
//           <div key={id}>
//             <h3>{firstName}</h3>
//             <p>{email}</p>
//           </div>
//         );
//       })}
//     </article>
//   );
// }

export default function FormControl() {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
  });
  const [people, setPeople] = useState([]);

  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.age && person.email) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      // setPerson(() => {
      //   return { firstName: "", email: "", age: "" };
      // });
      setPerson({ firstName: "", email: "", age: "" });
    }
  };
  return (
    <article
      style={{ width: "80vw", margin: "3rem auto", textAlign: "center" }}
    >
      <form action="">
        <div style={{ marginBottom: "5px" }}>
          <label htmlFor="firstName">Name : </label>
          <input
            type="text"
            name="firstName"
            value={person.firstName}
            onChange={inputHandle}
          />
        </div>
        <div style={{ marginBottom: "5px" }}>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            value={person.email}
            name="email"
            onChange={inputHandle}
          />
        </div>
        <div style={{ marginBottom: "5px" }}>
          <label htmlFor="age">Age : </label>
          <input
            type="text"
            value={person.age}
            name="age"
            onChange={inputHandle}
          />
        </div>
        <button onClick={handelSubmit} type="submit">
          submit
        </button>
      </form>
      {people.map((person) => {
        const { id, firstName, email, age } = person;
        return (
          <div
            key={id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h2>{firstName}</h2>
            <p>{age}</p>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
  );
}
