"use client";
import Link from "next/link";
import getHistoryLog from "../lib/getHistoryLog";
import { useState, useEffect } from "react";
import { getCategories } from "../lib/categories";

export default function HistoryLog() {
  const [loading, isLoading] = useState(false);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  // State for advanced filters
  const [category, setCategory] = useState([]);
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [keyword, setKeyword] = useState("");
  // const [transactionType, setTransactionType] = useState("");

  useEffect(() => {}, []);

  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
    const categories = getCategories();
    categories
      .then((data) => {
        setCategory(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">History Log</h1>
      </header>

      <div className="backBox">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>Starting Date</div>
          <input className="whiteBackgroundSquare" type="date" />
          <div>Ending Date</div>
          <input className="whiteBackgroundSquare" type="date" />

          <button onClick={toggleAdvancedOptions}>Advanced Options</button>

          {showAdvancedOptions && (
            <div>
              <div>
                <label>Category:</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {category.map((category) => {
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
              </div>

              <div>
                <label>Min Amount:</label>
                <input
                  type="number"
                  value={minAmount}
                  onChange={(e) => setMinAmount(e.target.value)}
                  placeholder="Minimum Amount"
                />
              </div>

              <div>
                <label>Max Amount:</label>
                <input
                  type="number"
                  value={maxAmount}
                  onChange={(e) => setMaxAmount(e.target.value)}
                  placeholder="Maximum Amount"
                />
              </div>

              {/* <div>
                <label>Transaction Type:</label>
                <select
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div> */}

              <div>
                <label>Keyword:</label>
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Search keyword"
                />
              </div>
            </div>
          )}
        </form>
      </div>

      <div className="flex justify-center">
        <div className={`lowerButtons`}>Generate Report</div>
      </div>
    </>
  );
}
