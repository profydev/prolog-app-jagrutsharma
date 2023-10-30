import { Routes } from "@config/routes";
import styles from "./index.module.scss";

const IssuesPage = () => {
  return (
    <div>
      <header className={styles.header}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <button className={styles.headerButton}>
          <a href={Routes.home}>Home</a>
        </button>
        <button className={styles.headerButton}>
          <a href={Routes.products}>Products</a>
        </button>
        <button className={styles.headerButton}>
          <a href={Routes.documentation}>Documentation</a>
        </button>
        <button className={styles.headerButton}>
          <a href={Routes.pricing}>Pricing</a>
        </button>
        <button className={styles.dashboardButton}>
          <a href={Routes.projects}>Open Dashboard </a>
        </button>
      </header>
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default IssuesPage;
