import { useState } from "react";
import Link from "next/link";
import DeleteTransaction from "./DeleteTransaction";
import styles from "./styles.module.css";

function EditTransaction({ onClose, transaction, categoryId }) {
  
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
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  const formatDateForDataBase = (dateString) => {
    if (!dateString) {
      console.error("Invalid date string:", dateString);
      return "";
    }
    // Append " 00:00:00" to the date string
    return dateString + " 00:00:00";
  };


const editTransaction = async (e) => {
  e.preventDefault();
  const formattedDate = formatDateForDataBase(transactionDate);

  try {
    // Capture the response from the fetch call into a variable
    const response = await fetch(
      "https://marteiduel.com/smartbudget/transaction.php",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transaction_id: transaction.id,
          amount: parseFloat(transactionAmount),
          description: transactionDescription,
          created_at: formattedDate,
          user_id: 1,
        }),
      }
    );

    // Use the response variable to get the JSON data
    const data = await response.json();
    if (data.success) {
      window.location.reload();
    } else {
      console.error("Failed to update the transaction:", data.message);
    }
  } catch (error) {
    console.error("Error during fetch operation:", error);
  }
};


  //Delete transaction
  const handleDelete = async (e) => {
    e.preventDefault();
    setShowDeleteModal(true);
    onClose();
  };

    const closePopout = (e) => {
      e.preventDefault();
      setShowDeleteModal(false);
    };

  return (
    <div className={styles.overlay} onClick={onClose}>
      {showDeleteModal && (
        <DeleteTransaction
          transactionId={transaction.id}
          onClose={closePopout}
          categoryId={categoryId}
        />
      )}
      <Link className="back" style={{color:"white"}} href={`/review-budget/${categoryId}`}>
        Back
      </Link>
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
          <button className={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditTransaction;
