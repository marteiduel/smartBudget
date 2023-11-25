"use client";
import styles from "./styles.module.css";
import { useState } from "react";

function EditTransaction({ onClose, transaction }) {
    const formatDate = (date) => {
      let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    };
  const [transactionDescription, setTransactionDescription] = useState(transaction.description);
  const [transactionAmount, setTransactionAmount] = useState(transaction.amount);
  const [transactionDate, setTransactionDate] = useState(formatDate(transaction.date));




  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  async function editTransaction() {
    await 
    fetch(
      `https://marteiduel.com/smartbudget/edit_transaction.php?transaction_id=${transaction.id}&description=${transactionDescription}&amount=${transactionAmount}&date=${transactionDate}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
    onClose();
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popUp} onClick={handleInsideClick}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            editTransaction(e);
          }}
        >
          <h1 className={styles.addCategoryTextTitle}>Edit Transaction</h1>

          <div className={styles.itemsCenter}>
            <label>Description</label>
            <input
              onChange={(e) => setTransactionDescription(e.target.value)}
              type="text"
              value={transactionDescription}
              required
            />
          </div>
          <div className={styles.itemsCenter}>
            <label>Amount</label>
            <input
              onChange={(e) => setTransactionAmount(e.target.value)}
              type="number"
              value={transactionAmount}
              required
            />
          </div>
          <div className={styles.itemsCenter}>
            <label>Date</label>
            <input
              onChange={(e) => setTransactionDate(e.target.value)}
              type="date"
              value={transactionDate}
              required
            />
          </div>

          <button className={styles.button} type="submit">
            Add Category
          </button>
          <button>Delete</button>
        </form>
      </div>
    </div>
  );
}

export default EditTransaction;
