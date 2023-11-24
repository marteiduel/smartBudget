"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SingleCategoryTransactions(urlId) {
    const id = urlId.params.id
    const [data, setData] = useState([]);

    useEffect(() => {
      console.log(id);
      fetch(
        `https://marteiduel.com/smartbudget/transactions_by_category.php?category_id=${id}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
      }, []);
        

    const router = useRouter();


  return <div> 
    {data.map((transaction) => {
      return (
        <div key={transaction.id}>
          <p>{transaction.id}</p>
          <p>${transaction.amount}</p>
          <p>{transaction.description}</p>
          <p>{transaction.transaction_date}</p>
        </div>
      );
    })}
  </div>;
}

export default SingleCategoryTransactions;
