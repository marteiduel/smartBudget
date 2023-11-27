"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles.module.css";
import EditTransaction from "./Components/EditTransaction";

function SingleCategoryTransactions(urlId) {
    const id = urlId.params.id
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

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
      }, [id]);
        
      function openPopout(transaction) {
        setSelectedTransaction(transaction);
        setShowModal(true);
      }

  const closePopout = (e) => {
    e.preventDefault();
    setShowModal(false);
  };


  return (
    <div>
      {showModal && (
        <EditTransaction
          transaction={selectedTransaction}
          onClose={closePopout}
          categoryId={id}
        />
      )}
      <header className="header">
        <Link className="back" href="/review-budget">
          Back
        </Link>
        <h1 className="pageTitle">Review Budget</h1>
      </header>

      <div className={`${styles.backBox} backBox`}>
        <div className="categoryItem">
          <div className="spaceBetween">
            <p>Category</p>
            <p className="pr-4">Amount</p>
          </div>
        </div>
        {data.map((transaction) => {
          return (
            <div
              key={transaction.id}
              onClick={() => openPopout(transaction)}
              className="categoryItem"
            >
              <div className="spaceBetween">
                <div>
                  {transaction.description}{" "}
                  <p style={{ fontSize: "10px" }}>
                    {transaction.transaction_date.split(" ")[0]}
                  </p>
                </div>
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
