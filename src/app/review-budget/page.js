import Link from "next/link";
import styles from "./styles.module.css";
async function getData() {
  const res = await fetch(
    "https://marteiduel.com/smartbudget/categories_money_left.php"
  );

  return res.json();
}

export default async function ReviewBudget() {
  const data = await getData();

  return (
    <div>
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">Review Budget</h1>
      </header>

      <div className={`${styles.backBox} backBox`}>
        <div className="categoryItem">
          <div className={styles.categoryAndIcons}>
            <p>Category</p>
            <p className="pr-4">Left</p>
          </div>
        </div>
        {data.map((category) => {
          return (
            <div key={category.categoryId} className="categoryItem">
              <div className={styles.categoryAndIcons}>
                <div>{category.category_name}</div>
                <div
                  className={
                    category.remaining_budget.includes("-")
                      ? styles.negativeBalance
                      : styles.positiveBalance
                  }
                >
                  <p>${category.remaining_budget}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
