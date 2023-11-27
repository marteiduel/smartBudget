import styles from "./styles.module.css";
import { useState } from "react";

function EditTransaction({ onClose, transactionId }) {
  console.log(transactionId);

  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  //Delete transaction
  const handleDelete = async (e) => {
    e.preventDefault();
    await fetch(
      `https://marteiduel.com/smartbudget/delete_transaction.php?transaction_id=${transaction.id}`
    );
    onClose();
  };

  return (
    <div>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.popUp} onClick={handleInsideClick}>
          <h2>Are you sure you want to delete this transaction?</h2>
          <button className={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTransaction;
