"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { getCategories } from "../lib/categories";

export default function AddExpense() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [today, setToday] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    todaysDate();
    const data = getCategories();
    data
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  async function addExpense(e) {
    e.preventDefault();
    try {
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
      const data = await response.json();

      if (data.sucess) {
        setAmount("");
        setDescription("");
        setSelectedCategory("");
      }
    } catch (error) {
      console.error("Error adding expense:", error);
    }
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

  const handleAmountInput = (e) => {
    const value = e.target.value;
    if (/^[0-9]*\.?[0-9]*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <>
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">Add Expense</h1>
      </header>
      <div className="backBox">
        <form
          className={styles.form}
          onSubmit={(e) => {
            addExpense(e);
          }}
        >
          <div className={styles.labels}>Select Category</div>
          {categories ? (
            <select
              className="whiteBackgroundSquare"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>Select a value</option>
              {categories.map((category) => {
                return (
                  <option
                    key={category.categoryId}
                    value={category.categoryId}
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
            className="whiteBackgroundSquare"
            type="text"
            placeholder="Enter Amount"
            required
            pattern="[0-9]*\.?[0-9]+"
            onInput={(e) => handleAmountInput(e)}
            value={amount}
            id="amount"
          />

          <div className={styles.labels}>Expense Date</div>
          <input
            className="whiteBackgroundSquare"
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

          <input
            className=" whiteBackgroundSquare"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
}
