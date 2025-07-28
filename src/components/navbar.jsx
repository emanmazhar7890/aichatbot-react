import { useContext } from "react";
import { UserContext } from "../App";
const Navbar = () => {
  const { userDetail } = useContext(UserContext);
  return (
    <nav style={{ padding: "1rem" }}>
      Logged in as: <strong>{userDetail?.email}</strong>
    </nav>
  );
};

export default Navbar;
