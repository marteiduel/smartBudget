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

  // Test Fetch to Verify API Connectivity
  fetch("https://marteiduel.com/smartbudget/savings.php")
    .then(response => response.json())
    .then(data => console.log("Fetched Data:", data))
    .catch(error => console.error("Fetch Error:", error));

  const fetchData = async () => {
    try {
      const [savingsRes, categoriesRes] = await Promise.all([
        fetch("https://marteiduel.com/smartbudget/savings.php", { method: 'GET' }),
        getCategories()
      ]);

      if (!savingsRes.ok) throw new Error('Network response was not ok');

      const savingsData = await savingsRes.json();
      setData(savingsData);

      let total = 0;
      savingsData.forEach(item => {
        total += parseFloat(item.savings);
      });
      setTotalAmount(total);

      setCategories(categoriesRes);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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
  {(item) => {
    console.log("Rendering item:", item);
    return (
      <Row key={item.categoryId}>
        <Cell>{item.category_name}</Cell>
        <Cell>
          <Flex justifyContent="space-between">
            <div>{item.savings}</div>
            {loading ? <span>Loading...</span> : <Options category={item} categories={categories} onActionComplete={fetchData} />}
          </Flex>
        </Cell>
      </Row>
    );
  }}
</TableBody>
      </TableView>
    </View>
  );
}