"use client";
import styles from "./styles.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

function EditCategoryPopUp({ onClose, data }) {
  const router = useRouter();
  console.log(data);
  const categoryId = data.category_id;
  const [categoryName, setCategoryName] = useState(data.category_name);
  const [categoryBudget, setCategoryBudget] = useState(data.category_budget);

  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    // const response = await fetch(
    //   "https://marteiduel.com/smartbudget/category.php",
    //   {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       category_id: categoryId,
    //     }),
    //   }
    // );
    // const data = await response.json();
    // router.push("/categories");
  };

  async function EditCategory(e) {
    onClose();
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popUp} onClick={handleInsideClick}>
        <form className={styles.form} onSubmit={EditCategory}>
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

          <button className={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditCategoryPopUp;
