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
    <div className="colCenter">
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">History Log</h1>
      </header>

      <div className={styles.backBox}>
        {data.map((transaction) => {
          return (
            <div key={transaction.id} className="categoryItem">
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

      <div className="flex justify-center">
        <div className={`lowerButtons`}>Load More</div>
      </div>
    </div>
  );
}
