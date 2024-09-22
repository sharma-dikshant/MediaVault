import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../features/user/userSlice";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isAuthenticated = Boolean(user?.name);
  function handleLogout() {
    dispatch(removeUser());
  }
  return (
    <header className={styles.header}>
      <Link to="/home" className={styles["header-link"]}>
        MediaVault
      </Link>
      {!isAuthenticated ? (
        <Link to="/login" className={styles["header-link"]}>
          Login
        </Link>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </header>
  );
}

export default Header;
