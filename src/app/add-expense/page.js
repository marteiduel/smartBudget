"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import { getCategories } from "../lib/categories";
import { todaysDate, handleAmountInput } from "../lib/addExpenseFunctions";

export default function AddExpense() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [today, setToday] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [selectKey, setSelectKey] = useState(0);

  useEffect(() => {
    setToday(todaysDate());
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
      const response = await fetch(
        "https://marteiduel.com/smartbudget/transaction.php",
        {
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
        }
      );
      const data = await response.json();
      if (data.success) {
        setAmount("");
        setDescription("");
        setSelectedCategory("");
        setSelectKey((prevKey) => prevKey + 1);
      }
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  }

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
              key={selectKey}
              className="whiteBackgroundSquare"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>Select a Category</option>
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
            onInput={(e) => handleAmountInput(e.target.value, setAmount)}
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
            value={description}
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
