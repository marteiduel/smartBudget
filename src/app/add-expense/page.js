"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getCategories } from "../lib/categories";
import { todaysDate, handleAmountInput } from "../lib/addExpenseFunctions";
import { Button, Picker, DatePicker, Form, Item, TextArea, TextField, View } from "@adobe/react-spectrum";
import { parseDate } from "@internationalized/date";

export default function AddExpense() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDate(todaysDate());
    const data = getCategories();
    data
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const addExpense = async (e)=> {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    if (!selectedCategory || !amount || !date || !description) {
      alert('Please fill out all fields.');
      return;
    }
    try {
      const response = await fetch(
        "https://marteiduel.com/smartbudget/transaction.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryId: selectedCategory,
            amount: amount,
            date: date,
            description: description,
            userId: 1,
          }),
        }
      );
      const data = await response.json();
      if (data.success) {
        setAmount("");
        setDescription("");
        setSelectedCategory("");
      }
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  }

  const setDay = (date) => {
    setDate(`${date.year}-${date.month}-${date.day}`);
  }

  return (
    <>
      <View                 
        borderWidth="thin"
        borderColor="light"
        padding="size-250"
        backgroundColor="gray-50"
        height={"100vh"}>
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">Add Expense</h1>
      </header>
      <Form validationBehavior="native" isRequired>
      <Picker label="Select Category" onSelectionChange={(value) => setSelectedCategory(value)}>
        {categories.map((category) => (
          <Item key={category.categoryId} value={category.categoryId}>
            {category.category_name}
          </Item>
        ))}
      </Picker>
        <TextField 
          label="Amount"
          placeholder="Enter Amount"
          pattern="[0-9]*\.?[0-9]+"
          onInput={(e) => handleAmountInput(e.target.value, setAmount)}
          value={amount}
          id="amount"
          isRequired
        />

        <DatePicker label="Expense Date" onChange={setDay} defaultValue={parseDate(todaysDate())}/>
        
        <TextArea label="Expense Description" placeholder="Enter Description" onChange={setDescription} value={description} />

        <Button variant="cta" onPress={addExpense}>Submit</Button>
      </Form>
      </View>
    </>
  );
}
