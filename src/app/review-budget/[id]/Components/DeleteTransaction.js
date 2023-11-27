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
          {transactionId}
        </div>
      </div>
    </div>
  );
}

export default EditTransaction;
