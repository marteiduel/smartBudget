import Link from "next/link";
import styles from "./styles.module.css";
import Popout from "./Popout";
async function getData() {
  const res = await fetch(
    "https://marteiduel.com/smartbudget/get_categories.php"
  );

  return res.json();
}

export default async function Categories() {
  const data = await getData();

  return (
    // <Popout />

    <div>
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">Categories</h1>
      </header>

      <div className="backBox">
        {data.map((category) => {
          return (
            <div key={category.categoryId} className="categoryItem">
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
      <div className="whiteBackgroundSquare">Add Category</div>
    </div>
  );
}
