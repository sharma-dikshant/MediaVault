import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-blue-500 text-white p-4 text-center md:text-left flex justify-between">
      <Link to="/home">MediaVault</Link>
      <Link>Login</Link>
    </div>
  );
}

export default Header;
