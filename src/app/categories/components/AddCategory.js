"use client";
import styles from "./styles.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addCategory } from "../../lib/categories";

function Popout({ onClose }) {
  const router = useRouter();
  const [categoryName, setCategoryName] = useState("");
  const [categoryBudget, setCategoryBudget] = useState("");

  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  async function addCategory(e) {
    await addCategory(categoryName, categoryBudget, 1);
    setCategoryBudget("");
    setCategoryName("");
    onClose();
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popUp} onClick={handleInsideClick}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            addCategory(e);
          }}
        >
          <h1 className={styles.addCategoryTextTitle}>Add Category</h1>

          <div className={styles.itemsCenter}>
            <label>Category Name</label>
            <input
              onChange={(e) => setCategoryName(e.target.value)}
              type="text"
              placeholder="Ex. Groceries"
              value={categoryName}
              required
            />
          </div>
          <div className={styles.itemsCenter}>
            <label>Category Budget</label>
            <input
              onChange={(e) => setCategoryBudget(e.target.value)}
              type="number"
              placeholder="Ex. 100"
              value={categoryBudget}
              required
            />
          </div>

          <button className={styles.button} type="submit">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popout;
