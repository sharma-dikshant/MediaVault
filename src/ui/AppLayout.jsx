import { Outlet } from "react-router";
import styles from "./AppLayout.module.css";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div className={styles["app-container"]}>
      <header className={styles["header"]}>
        <Header />
      </header>
      <main className={styles["main"]}>
        <Outlet />
      </main>
      <footer className={styles["footer"]}>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
