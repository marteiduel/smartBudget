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
  console.log(typeof data[0].remaining_budget);

  return (
    <div>
      <header className={styles.header}>
        <Link className={styles.back} href="/">
          Back
        </Link>
        <h1 className={styles.pageTitle}>Review Budget</h1>
      </header>

      <div className={styles.categoriesList}>
        <div className={styles.categoryName}>
          <div className={styles.categoryAndIcons}>
            <p>Category</p>
            <p className="pr-4">Left</p>
          </div>
        </div>
        {data.map((category) => {
          return (
            <div key={category.categoryId} className={styles.categoryName}>
              <div className={styles.categoryAndIcons}>
                <div>{category.category_name}</div>
                <div className={styles.icons}>
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
