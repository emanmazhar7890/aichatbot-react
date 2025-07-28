import { useContext, useState } from "react";
import { UserContext } from "../App";

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (name === "eman" && email === "emanmazhar@gmail.com") {
      login({ name, email });
    } else {
      alert("invalid");
    }
  };
  const onchangeName = (e) => {
    setName(e.target.value);
  };
  const onchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <main className="main">
      <div>
        <form className="form" onSubmit={submit}>
          <h1 className="heading">Login</h1>
          <input
            className="form-input"
            type="text"
            placeholder="username"
            value={name}
            onChange={onchangeName}
          />

          <input
            className="form-input"
            type="email"
            placeholder="email"
            value={email}
            onChange={onchangeEmail}
          />
          <button className="form-btn" type="submit">
            login
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
