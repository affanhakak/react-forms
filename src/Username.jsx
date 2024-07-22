import { useState } from "react";
function Username() {
  const [username, setUsername] = useState("Affan");
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={updateUsername}
        id="username"
      />
      <button>Submit</button>
    </div>
  );
}
export default Username;

//controlled component in react-forms
