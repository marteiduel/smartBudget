"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import styles from "./styles.module.css";
import { getTotalBudget } from "../lib/totalBudget";

export default function ReviewBudget() {
  const [data, setData] = useState([]);
  const [budgetTotal, setBudgetTotal] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://marteiduel.com/smartbudget/categories_money_left.php"
      );
      const data = await res.json();
      setData(data);
    }
    getData();

    async function getBudget(){
      const res = await getTotalBudget();
      const data = await res.total_budget
      setBudgetTotal(data);
    }
    getBudget();
  }, []);

  return (
    <div>
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">Review Budget</h1>
        <div className="reset">
              <div style={{display:"flex", flexDirection:"column"}}>
                <p className="text-center">Total</p>
                <p className="text-center">${budgetTotal}</p>
              </div>
            </div>
      </header>

      <div className={`${styles.backBox} backBox`}>
        <div className="categoryItem">
          <div className="spaceBetween">
            <p>Budget Total</p>
            <p className="pr-4">${budgetTotal}</p>
          </div>
        </div>
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
