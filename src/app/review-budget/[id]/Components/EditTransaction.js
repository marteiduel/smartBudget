import styles from "./styles.module.css";
import { useState } from "react";

function EditTransaction({ onClose, transaction }) {
  const formatDate = (dateString) => {
    if (!dateString) {
      console.error("Invalid date string:", dateString);
      return "";
    }
    const datePart = dateString.split(" ")[0];
    const [year, month, day] = datePart.split("-");
    if (!year || !month || !day) {
      console.error("Invalid date components:", year, month, day);
      return "";
    }
    return [year, month, day].join("-");
  };

  const [transactionDescription, setTransactionDescription] = useState(
    transaction.description
  );
  const [transactionAmount, setTransactionAmount] = useState(
    transaction.amount
  );
  const [transactionDate, setTransactionDate] = useState(
    formatDate(transaction.transaction_date)
  );

  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  // Function to edit the transaction
  async function editTransaction(e) {
    e.preventDefault(); 

    // Fetch request to update the transaction
    const response = await fetch(
      `https://marteiduel.com/smartbudget/edit_transaction.php?transaction_id=${transaction.id}&description=${transactionDescription}&amount=${transactionAmount}&date=${transactionDate}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    onClose();
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popUp} onClick={handleInsideClick}>
        <form className={styles.form} onSubmit={editTransaction}>
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
            Save Changes
          </button>
          <button>Delete</button>
        </form>
      </div>
    </div>
  );
}

export default EditTransaction;
