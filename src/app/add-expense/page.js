"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

export default function HistoryLog() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [today, setToday] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  // const [subcategories, setSubCategories] = useState([]);
  // const [selectedSubCategory, setSelectedSubCategory] = useState("");

  useEffect(() => {
    todaysDate();
    fetch("https://marteiduel.com/smartbudget/get_categories.php")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  function selectCategory(categoryId) {
    setSelectedCategory(categoryId);
    // fetch(
    //   "https://marteiduel.com/smartbudget/get_subcategories.php?categoryId=" +
    //     categoryId
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setSubCategories(data);
    //   })
    //   .catch((error) => console.error("Error fetching subcategories:", error));
  }

  function addExpense(e) {
    e.preventDefault();
    fetch("https://marteiduel.com/smartbudget/add_expense.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: selectedCategory,
        amount: amount,
        date: today,
        description: description,
        userId: 1,
      }),
    });
    setAmount("");
    setDescription("");
  }

  function todaysDate() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    const formattedDate = `${year}-${month}-${day}`;
    setToday(formattedDate);
  }

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.back} href="/">
          Back
        </Link>
        <h1 className={styles.pageTitle}>Add Expense</h1>
      </header>
      <div className={styles.categoriesList}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            addExpense(e);
          }}
        >
          <div className={styles.labels}>Select Category</div>
          {categories ? (
            <select
              className={styles.addCategory}
              onChange={(e) => selectCategory(e.target.value)}
            >
              <option value="">Select a value</option>
              {categories.map((category) => {
                return (
                  <option
                    key={category.categoryId}
                    value={category.categoryId}
                    name="category"
                    id="category"
                    required
                  >
                    {category.category_name}
                  </option>
                );
              })}
            </select>
          ) : (
            "Loading..."
          )}

          <div className={styles.labels}>Amount</div>
          <input
            className={styles.addCategory}
            type="float"
            placeholder="Enter Amount"
            required
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
          />

          <div className={styles.labels}>Expense Date</div>
          <input
            className={styles.addCategory}
            type="date"
            onChange={(e) => setToday(e.target.value)}
            value={today}
          />

          <div className={styles.labels}>Expense Description</div>
          <textarea
            className={styles.description}
            type="textarea"
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <input className={styles.addCategory} type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
