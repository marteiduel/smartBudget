"use client";
import Link from "next/link";
import generateHistoryLog from "../lib/generateHistoryLog";
import { useReducer } from "react";
import { getCategories } from "../lib/categories";
import { initialState, reducer } from "./reducer";
import { getTodayDate } from "../lib/getTodaysDate";
import ShowReport from "./components/ShowReport";
import styles from "./styles.module.css";

export default function HistoryLog() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleAdvancedOptions = (e) => {
    e.preventDefault();
    dispatch({ type: "TOGGLE_ADVANCED_OPTIONS" });
    if (state.showAdvancedOptions === false) {
      const categories = getCategories();
      categories
        .then((data) => {
          dispatch({ type: "SET_CATEGORIES", payload: data });
        })
        .catch((error) => console.error("Error fetching categories:", error));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.startingDate === "") {
      alert("Please enter a starting date");
      return;
    }
    if (state.endingDate === "") {
      alert("Please enter an ending date");
      return;
    }
    if (state.startingDate > state.endingDate) {
      alert("Starting date cannot be after ending date");
      return;
    }
    generateHistoryLog(
      state.startingDate,
      state.endingDate,
      state.category_id,
      state.minAmount,
      state.maxAmount,
      state.keyword
    ).then((data) => {
      dispatch({ type: "SET_REPORT_TRANSACTIONS", payload: data });
      if (data && data.length > 0) {
        dispatch({ type: "SET_SHOW_REPORT_MODAL", payload: true });
        dispatch({ type: "SET_NO_TRANSACTIONS_FOUND", payload: false });
      } else {
        dispatch({ type: "SET_NO_TRANSACTIONS_FOUND", payload: true });
      }
    });
  };

  const resetForm = () => {
    dispatch({ type: "SET_STARTING_DATE", payload: "" });
    dispatch({ type: "SET_ENDING_DATE", payload: "" });
    dispatch({ type: "SET_CATEGORY", payload: "" });
    dispatch({ type: "SET_MIN_AMOUNT", payload: "" });
    dispatch({ type: "SET_MAX_AMOUNT", payload: "" });
    dispatch({ type: "SET_KEYWORD", payload: "" });
    dispatch({ type: "SET_NO_TRANSACTIONS_FOUND", payload: false });
  };

  return (
    <>
      {state.showReportModal && (
        <ShowReport
          transactions={state.transactions}
          onClose={() =>
            dispatch({
              type: "SET_SHOW_REPORT_MODAL",
              payload: false,
            })
          }
        />
      )}

      {!state.showReportModal && (
        <>
          <header className="header">
            <Link className="back" href="/">
              Back
            </Link>
            <h1 className="pageTitle">History Log</h1>
            <div className="reset" onClick={resetForm}>
              Reset
            </div>
          </header>
          <div className="backBox">
            <form className={styles.historyLogForm}>
              {state.noTransactionsFound && (
                <h2 className={styles.noTransactionsFound}>
                  No Transactions Found
                </h2>
              )}
              <h3 className={styles.h2}>Starting Date*</h3>
              <input
                className="whiteBackgroundSquare"
                type="date"
                value={state.startingDate}
                onChange={(e) =>
                  dispatch({
                    type: "SET_STARTING_DATE",
                    payload: e.target.value,
                  })
                }
                max={getTodayDate()}
                min="2023-01-01"
              />
              <div className={styles.h2}>Ending Date*</div>
              <input
                className="whiteBackgroundSquare"
                type="date"
                value={state.endingDate}
                onChange={(e) =>
                  dispatch({ type: "SET_ENDING_DATE", payload: e.target.value })
                }
                max={getTodayDate()}
                min="2023-01-02"
              />

              <button
                onClick={(e) => toggleAdvancedOptions(e)}
                className={
                  state.showAdvancedOptions
                    ? styles.advanceButtonActive
                    : styles.advanceButtonInactive
                }
              >
                Advanced Options
              </button>

              {state.showAdvancedOptions && (
                <div>
                  <div className={styles.marginTop}>
                    <label className={styles.categoryTitle}>Category</label>
                    <div className={styles.centerAmount}>
                      <select
                        className="whiteBackgroundSquare"
                        value={state.category_id}
                        onChange={(e) =>
                          dispatch({
                            type: "SET_CATEGORY",
                            payload: e.target.value,
                          })
                        }
                      >
                        <option>Select Category</option>
                        {state.categoriesList.map((category) => {
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
                  </div>
                  <div className={styles.historyLogAmountsContainer}>
                    <div className={styles.centerAmount}>
                      <label className={styles.labels}>Min Amount</label>
                      <input
                        className={styles.historyLogAmounts}
                        type="number"
                        value={state.minAmount}
                        onChange={(e) =>
                          dispatch({
                            type: "SET_MIN_AMOUNT",
                            payload: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className={styles.centerAmount}>
                      <label className={styles.labels}>Max Amount</label>
                      <input
                        className={styles.historyLogAmounts}
                        type="number"
                        value={state.maxAmount}
                        onChange={(e) =>
                          dispatch({
                            type: "SET_MAX_AMOUNT",
                            payload: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.marginTop}>
                    <label className={styles.categoryTitle}>Keyword</label>
                    <input
                      className={styles.keyWordInputField}
                      type="text"
                      value={state.keyword}
                      onChange={(e) =>
                        dispatch({
                          type: "SET_KEYWORD",
                          payload: e.target.value,
                        })
                      }
                      placeholder="Search keyword"
                    />
                  </div>
                </div>
              )}
            </form>
          </div>
          <div className="flex justify-center">
            <button onClick={handleSubmit} className={`lowerButtons`}>
              Generate Report
            </button>
          </div>
        </>
      )}
    </>
  );
}
