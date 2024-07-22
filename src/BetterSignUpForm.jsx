import { useState } from "react";

export default function BetterSignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const changedField = e.target.name;
    const newvalue = e.target.value;
    setFormData((currentData) => {
      currentData[changedField] = newvalue;
      return { ...currentData };
    });
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div>
      <label htmlFor="firstName">Firstname</label>
      <input
        type="text"
        placeholder="Firstname"
        name="firstName"
        id="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">lastname</label>
      <input
        type="text"
        placeholder="Lastname"
        name="lastName"
        id="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
