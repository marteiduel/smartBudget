"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import {useState, useEffect} from "react";

// async function getData() {
//   const res = await fetch(
//     "https://marteiduel.com/smartbudget/categories_money_left.php"
//   );
//   return res.json();
// }

export default function ReviewBudget() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://marteiduel.com/smartbudget/categories_money_left.php"
      );
      const data = await res.json();
      setData(data);
    }
    getData();
  }, []);
  

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
          <div className="spaceBetween">
            <p>Category</p>
            <p className="pr-4">Left</p>
          </div>
        </div>
        {data.map((category) => {
          return (
            <div key={category.categoryId} className="categoryItem">
              <div className="spaceBetween">
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
