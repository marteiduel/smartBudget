"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import styles from "./styles.module.css";
import {View, Cell, Column, Row, TableView, TableBody, TableHeader} from '@adobe/react-spectrum'


export default function ReviewBudget() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://marteiduel.com/smartbudget/categories_money_left.php"
      );
      const data = await res.json();
      setData(data);
    }
    getData();
  }, []);

  return (
    <View 
    backgroundColor="gray-50"
    padding="size-100"
    borderRadius="medium"
    borderWidth="thin"
    borderColor="blue-500">
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">Review Budget</h1>
      </header>

      <TableView>
        <TableHeader>
          <Column align="start" showDivider>
            Category
          </Column>
          <Column showDivider>
            Left
          </Column>
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <Row href={`review-budget/${item.category_id}`} key={item.category_id}>
              <Cell >{item.category_name}</Cell>
              <Cell>
                <div className={
                      item.remaining_budget.includes("-")
                        ? styles.negativeBalance
                        : styles.positiveBalance
                    }>
                      {item.remaining_budget}
                    </div>
              </Cell>
            </Row>
          )}
        </TableBody>
      </TableView>
    </View>
  );
}
