import { useState } from "react";

export default function SignUpForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastname(e.target.value);
  };
  const handleSubmit = () => {
    console.log(firstname, lastname);
  };
  return (
    <form>
      <div>
        <label htmlFor="firstname">Enter Firstname</label>
        <input
          type="text"
          id="firstname"
          onChange={updateFirstName}
          placeholder="Enter Firstname"
          value={firstname}
        />
      </div>
      <div>
        <label htmlFor="lastname">Enter Lastname</label>
        <input
          type="text"
          id="lastname"
          onChange={updateLastName}
          placeholder="Enter Firstname"
          value={lastname}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
