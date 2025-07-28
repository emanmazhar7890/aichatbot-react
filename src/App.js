import { createContext, useState } from "react";
import LoginForm from "./components/loginForm";
import Navbar from "./components/navbar";
import Chatbot from "./components/chatbot";
import "./App.css";
export const UserContext = createContext();
function App() {
  const [islogin, setIslogin] = useState(false);
  const [userDetail, setUserDetail] = useState(null);

  const login = (user) => {
    setIslogin(true);
    setUserDetail(user);
  };
  const logout = () => {
    setIslogin(false);
    setUserDetail(null);
  };

  return (
    <UserContext.Provider value={{ islogin, userDetail, logout, login }}>
      {!islogin ? (
        <LoginForm />
      ) : (
        <>
          <Navbar />
          <Chatbot />
        </>
      )}
    </UserContext.Provider>
  );
}
export default App;
