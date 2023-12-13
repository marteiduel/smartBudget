import styles from "./styles.module.css";
function ShowReport({ onClose, transactions }) {
  return (
    <div>
      <header className="header">
        <div className="back" onClick={onClose}>
          Back
        </div>
        <h1 className="pageTitle">Report</h1>
      </header>

      <div className={`${styles.backBox}`}>
        <div className="categoryItem">
          <div className="spaceBetween">
            <p>Category</p>
            <p className="pr-4">Amount</p>
          </div>
        </div>
        {transactions.map((transaction) => {
          return (
            <div key={transaction.id} className="categoryItem">
              <div className="spaceBetween">
                <div>
                  {transaction.description}{" "}
                  <p style={{ fontSize: "10px" }}>
                    {transaction.transaction_date.split(" ")[0]}
                  </p>
                </div>
                <div>${transaction.amount}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowReport;
