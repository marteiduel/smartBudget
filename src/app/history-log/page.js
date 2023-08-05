"use client";
import Link from "next/link";
import getHistoryLog from "../lib/getHistoryLog";
import { useState, useEffect } from "react";
import Popout from "./components/singleLog";

export default function HistoryLog() {
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState([]);
  const [log, setLog] = useState([]);

  useEffect(() => {
    getHistoryLog().then((data) => {
      setData(data);
      isLoading(false);
    });
  }, []);

  const openPopout = (e, id) => {
    e.preventDefault();
    console.log(id, "open pop");
    setLog(id);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Popout id={log} />
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">History Log</h1>
      </header>

      <div className="backBox">
        {data.map((transaction) => {
          return (
            <div
              onClick={(e) => {
                openPopout(e, transaction.id);
              }}
              key={transaction.id}
              className="categoryItem"
            >
              <div className="spaceBetween">
                {/* Next Lines 3 Tailwind */}
                <div className="flex">
                  <p className="w-4/5">{transaction.description}</p>
                  <p className="text-xs self-end w-14">
                    {transaction.transaction_date.slice(5, 10)}
                  </p>
                </div>
                <div className="spaceBetween">${transaction.amount}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <div className={`lowerButtons`}>Load More</div>
      </div>
    </>
  );
}
