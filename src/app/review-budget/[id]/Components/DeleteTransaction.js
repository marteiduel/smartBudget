import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

function EditTransaction({ onClose, transactionId, categoryId }) {
  const router = useRouter();

  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

    //DELETE FUNCTION
const handleDelete = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      "https://marteiduel.com/smartbudget/transaction.php",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transaction_id: transactionId,
          user_id: 1,
        }),
      }
    );

    const data = await response.json();
    if (data.success) {
      // Reload the current page
      window.location.reload();
    } else {
      // Handle the error case
      console.error("Failed to delete the transaction");
    }
  } catch (error) {
    console.error("Error deleting transaction:", error);
  }
};


      

  return (
    <div>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.deletePopUp} onClick={handleInsideClick}>
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
