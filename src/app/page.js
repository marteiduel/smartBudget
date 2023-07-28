import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Home() {
  return (
    // min-h-screen
    <main className="flex flex-col items-center justify-between">
      <Link className={styles.mainButtons} href="/budget">
        <div className={styles.innerButton}>
          <p className={styles.innterButtonText}>Add Expense</p>
          <Image className={styles.icons} alt="Add Expense" />
        </div>
      </Link>
      <Link className={styles.mainButtons} href="/budget">
        <div className={styles.innerButton}>
          <p className={styles.innterButtonText}>Add Income</p>
          <Image className={styles.icons} alt="Add Expense" />
        </div>
      </Link>
      <Link className={styles.mainButtons} href="/budget">
        <div className={styles.innerButton}>
          <p className={styles.innterButtonText}>Review Budget</p>
          <Image className={styles.icons} alt="Add Expense" />
        </div>
      </Link>
      <Link className={styles.mainButtons} href="/budget">
        <div className={styles.innerButton}>
          <p className={styles.innterButtonText}>Categories</p>
          <Image className={styles.icons} alt="Add Expense" />
        </div>
      </Link>
      <Link className={styles.mainButtons} href="/budget">
        <div className={styles.innerButton}>
          <p className={styles.innterButtonText}>Set Budget</p>
          <Image className={styles.icons} alt="Add Expense" />
        </div>
      </Link>
      <Link className={styles.mainButtons} href="/budget">
        <div className={styles.innerButton}>
          <p className={styles.innterButtonText}>Log</p>
          <Image className={styles.icons} alt="Add Expense" />
        </div>
      </Link>
    </main>
  );
}
