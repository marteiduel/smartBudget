import Link from "next/link";
import getHistoryLog from "../lib/getHistoryLog";

export default async function HistoryLog() {
  const data = await getHistoryLog();

  return (
    <>
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">History Log</h1>
      </header>

      <div className="backBox">
        {data.map((transaction) => {
          return (
            <Link
              href={`/history-log/${transaction.id}`}
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
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center">
        <div className={`lowerButtons`}>Load More</div>
      </div>
    </>
  );
}
