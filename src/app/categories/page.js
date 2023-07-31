import Link from "next/link";
import styles from "./styles.module.css";
import NextTopLoader from "nextjs-toploader";
async function getData() {
  const res = await fetch(
    "https://marteiduel.com/smartbudget/get_categories.php"
  );

  return res.json();
}

export default async function Page() {
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
      <div>
        {data.map((category) => {
          return <div key={category.categoryId}>{category.category_name}</div>;
        })}
      </div>
    </div>
  );
}
