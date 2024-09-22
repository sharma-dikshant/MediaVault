import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <p className={styles["footer-text"]}>
          Keep important video links at a unified place.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
