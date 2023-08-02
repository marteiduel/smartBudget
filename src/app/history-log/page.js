import Link from "next/link";
import styles from "./styles.module.css";

async function getHistoryLog() {
  const res = await fetch(
    "https://marteiduel.com/smartbudget/get_history_log.php",
    { cache: "no-cache" }
  );

  return res.json();
}

export default async function HistoryLog() {
  const data = await getHistoryLog();

  return (
    <div>
      <header className={styles.header}>
        <Link className={styles.back} href="/">
          Back
        </Link>
        <h1 className={styles.pageTitle}>History Log</h1>
      </header>

      <div className={styles.categoriesList}>
        {data.map((transaction) => {
          return (
            <div key={transaction.id} className={styles.categoryName}>
              <div className={styles.categoryAndIcons}>
                <div className="flex">
                  <p className="w-4/5">{transaction.description}</p>
                  <p className="text-xs self-end w-14">
                    {transaction.transaction_date.slice(5, 10)}
                  </p>
                </div>
                <div className={styles.icons}>${transaction.amount}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.addCategory}>Load More</div>
    </div>
  );
}
