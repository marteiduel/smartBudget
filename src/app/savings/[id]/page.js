"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import EditTransaction from "./Components/EditTransaction";
import {View, Cell, Column, Row, TableView, TableBody, TableHeader} from '@adobe/react-spectrum'

function SingleCategoryTransactions(urlId) {
  const id = urlId.params.id
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  
  useEffect(() => {
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
        console.log(data)
        setData(data);
      })
    .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
    }, [id]);
      
    function openPopup(transactionId) {
      var transaction = data.find((x) => x.id == transactionId);
      setSelectedTransaction(transaction);
      setShowModal(true);
    }

  const closePopup = (e) => {
    e.preventDefault();
    setShowModal(false);
  };


  return (
    <View 
    backgroundColor="gray-50"
    padding="size-100"
    borderRadius="medium"
    borderWidth="thin"
    borderColor="blue-500"
    >
      {showModal && (
        <EditTransaction
          transaction={selectedTransaction}
          onClose={closePopup}
          categoryId={id}
        />
      )}
      <header className="header">
        <Link className="back" href="/savings">
          Back
        </Link>
        <h1 className="pageTitle">Review Budget</h1>
      </header>

      <TableView onAction={(item) => openPopup(item)}>
        <TableHeader>
          <Column showDivider>
            Description
          </Column>
          <Column showDivider>
            Amount
          </Column>
        </TableHeader>
        <TableBody items={data} >
          {(item) => (
            <Row key={item.id} >
              {item.description ? <Cell >{item.description}</Cell> : <Cell >No description</Cell>}
              <Cell>
                {item.amount}
              </Cell>
            </Row>
          )}  
        </TableBody>
      </TableView>
    </View>
  );
}

export default SingleCategoryTransactions;
