"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles.module.css";

function SingleCategoryTransactions(urlId) {
    const id = urlId.params.id
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(
        `https://marteiduel.com/smartbudget/transactions_by_category.php?category_id=${id}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data)
          setData(data);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
      }, []);
        

    const router = useRouter();


  return (
    <div>
      <header className="header">
        <Link className="back" href="/review-budget">
          Back
        </Link>
        <h1 className="pageTitle">Review Budget</h1>
      </header>

      <div className={`${styles.backBox} backBox`}>
        <div className="categoryItem">
          <div className="spaceBetween">
            <p className="pr-4">Date</p>
            <p>Category</p>
            <p className="pr-4">Amount</p>
          </div>
        </div>
        {data.map((transaction) => {
          return (
            <div key={transaction.id} className="categoryItem">
              <div className="spaceBetween">
                <div>{transaction.transaction_date}</div>
                <div>{transaction.description}</div>
                <div>${transaction.amount}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SingleCategoryTransactions;
