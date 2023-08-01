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

export default async function Categories() {
  const data = await getData();
  console.log(data);

  return (
    <div>
      <header className={styles.header}>
        <Link className={styles.back} href="/">
          Back
        </Link>
        <h1 className={styles.pageTitle}>Categories</h1>
      </header>

      <div className={styles.categoriesList}>
        {data.map((category) => {
          return (
            <div key={category.categoryId} className={styles.categoryName}>
              <div className={styles.categoryAndIcons}>
                <div>{category.category_name}</div>
                <div className={styles.icons}>
                  <p>${category.category_budget}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.addCategory}>Add Category</div>
    </div>
  );
}
