import Link from "next/link";
import styles from "./styles.module.css";

async function getData() {
  const res = await fetch("https://marteiduel.com/smartbudget/categories.php", {
    method: "GET",
  });

  return res.json();
}

export default async function SetBudget() {
  const data = await getData();

  return (
    <div>
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">Set Budget</h1>
      </header>

      <div className={styles.categoriesList}>
        {data.map((category) => {
          return (
            <div key={category.categoryId} className="categoryItem">
              {category.category_name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
