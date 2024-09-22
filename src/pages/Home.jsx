import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Home.module.css";

import Button from "../ui/Button";

function Home() {
  const user = useSelector((state) => state.user);
  const isAuthenticated = Boolean(user?.name);
  return (
    <div className={styles["home-container"]}>
      <h1 className={styles["welcome-heading"]}>Welcome to MediaVault</h1>
      <p className={styles["welcome-text"]}>
        Your secure media storage solution.
      </p>
      <Link to={isAuthenticated ? "/vault" : "/login"}>
        <button className={styles["primary-button"]}>Browse Vault</button>
      </Link>
    </div>
  );
}

export default Home;
