import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <header className="flex justify-center items-center text-4xl m-8">
        <h1 className="font-medium">Smart Budget</h1>
      </header>
      <Link className={styles.mainButtons} href="/add-expense">
        <div className={styles.innerButton}>
          <p className={styles.innerButtonText}>Add Expense</p>
          <Image
            src="/assets/icons/add-expense.png"
            className={styles.icons}
            width={50}
            height={50}
            alt="Add Expense"
          />
        </div>
      </Link>
      {/* <Link className={styles.mainButtons} href="/add-income">
        <div className={styles.innerButton}>
          <p className={styles.innerButtonText}>Add Income</p>
          <Image
            src="/assets/icons/add-income.png"
            className={styles.icons}
            alt="Add Expense"
            width={50}
            height={50}
          />
        </div>
      </Link> */}
      <Link className={styles.mainButtons} href="/review-budget">
        <div className={styles.innerButton}>
          <p className={styles.innerButtonText}>Review Budget</p>
          <Image
            src="/assets/icons/review-budget.png"
            className={styles.icons}
            alt="Add Expense"
            width={50}
            height={50}
          />
        </div>
      </Link>
      <Link className={styles.mainButtons} href="/categories">
        <div className={styles.innerButton}>
          <p className={styles.innerButtonText}>Categories</p>
          <Image
            src="/assets/icons/categories.png"
            className={styles.icons}
            alt="Add Expense"
            width={50}
            height={50}
          />
        </div>
      </Link>

      <Link className={styles.mainButtons} href="/history-log">
        <div className={styles.innerButton}>
          <p className={styles.innerButtonText}>Log</p>
          <Image
            src="/assets/icons/history-log.png"
            className={styles.icons}
            alt="Add Expense"
            width={50}
            height={50}
          />
        </div>
      </Link>
    </main>
  );
}
