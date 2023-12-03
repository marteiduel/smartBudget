"use client";
import styles from "./styles.module.css";
import { useState } from "react";
import { deleteCategory, editCategory } from "@/app/lib/categories";

function EditCategoryPopUp({ onClose, data }) {
  const categoryId = data.categoryId;
  const [categoryName, setCategoryName] = useState(data.category_name);
  const [categoryBudget, setCategoryBudget] = useState(data.category_budget);

  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    await deleteCategory(categoryId);
    window.location.reload();
  };

  async function editHandler(e) {
    e.preventDefault();
    await editCategory(categoryName, categoryBudget, categoryId);
    window.location.reload();
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popUp} onClick={handleInsideClick}>
        <form className={styles.form} onSubmit={editHandler}>
          <h1 className={styles.addCategoryTextTitle}>
            Edit Category: {data.category_name}
          </h1>

          <div className={styles.itemsCenter}>
            <label>Category Name</label>
            <input
              onChange={(e) => setCategoryName(e.target.value)}
              type="text"
              value={categoryName}
              required
            />
          </div>
          <div className={styles.itemsCenter}>
            <label>Category Budget</label>
            <input
              onChange={(e) => setCategoryBudget(e.target.value)}
              type="number"
              value={categoryBudget}
              required
            />
          </div>

          <button className={styles.button} type="submit">
            Edit Category
          </button>

          <button className={styles.deleteButton} onClick={deleteHandler}>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditCategoryPopUp;
