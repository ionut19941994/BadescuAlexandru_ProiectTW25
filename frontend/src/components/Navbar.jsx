import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Candidați</Link> |{" "}
      <Link to="/import-linkedin">Import LinkedIn</Link> |{" "}
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
