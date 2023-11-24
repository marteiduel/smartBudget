"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export default function ReviewBudget() {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://marteiduel.com/smartbudget/categories_money_left.php"
      );
      const data = await res.json();
      setData(data);
      console.log(data);
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
            <Link
              href={`review-budget/${category.category_id}`}
              key={category.category_id}
              className="categoryItem"
            >
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
            </Link>
          );
        })}
      </div>
    </div>
  );
}
