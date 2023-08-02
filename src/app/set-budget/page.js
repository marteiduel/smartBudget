import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
// import NextTopLoader from "nextjs-toploader";
async function getData() {
  const res = await fetch(
    "https://marteiduel.com/smartbudget/get_categories.php"
  );

  return res.json();
}

export default async function SetBudget() {
  const data = await getData();

  return (
    <div>
      <header className={styles.header}>
        <Link className={styles.back} href="/">
          Back
        </Link>
        <h1 className={styles.pageTitle}>Set Budget</h1>
      </header>

      <div className={styles.categoriesList}>
        {data.map((category) => {
          return (
            <div key={category.categoryId} className={styles.categoryName}>
              {category.category_name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
