import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/home" className={styles["header-link"]}>
        MediaVault
      </Link>
      <Link to="/login" className={styles["header-link"]}>
        Login
      </Link>
    </header>
  );
}

export default Header;
