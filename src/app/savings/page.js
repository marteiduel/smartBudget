"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { View, Cell, Column, Row, TableView, TableBody, TableHeader, Flex } from '@adobe/react-spectrum';
import { Options } from './options'; 
import { getCategories } from "../lib/categories";

export default function ReviewBudget() {
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://marteiduel.com/smartbudget/savings.php");
      const data = await res.json();
      setData(data);
      
      // Calculate total amount after data is fetched
      let total = 0;
      data.forEach(item => {
        total += parseFloat(item.savings);
      });
      setTotalAmount(total);

      const categories = await getCategories();
      setCategories(categories);
      setLoading(false);
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
        <h1 className="pageTitle">Savings</h1>
        <div className="total-corner" style={{display:"flex", flexDirection:"column", padding:"15px"}}>
          <p className="text-center">Total</p>
          <p className="text-center">{totalAmount}</p>
        </div>
      </header>

      <TableView>
        <TableHeader>
          <Column align="start" showDivider>Category</Column>
          <Column showDivider>Saved</Column>
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <Row key={item.categoryId}>
              <Cell>{item.category_name}</Cell>
              <Cell>
                <Flex justifyContent="space-between">
                  <div>{item.savings}</div>
                  {!loading && <Options category={item} categories={categories} />} 
                </Flex>
              </Cell>
            </Row>
          )}
        </TableBody>
      </TableView>
    </View>
  );
}