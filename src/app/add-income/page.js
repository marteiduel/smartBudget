"use client";
import Link from "next/link";
import React, { useState } from "react";
import { todaysDate, handleAmountInput } from "../lib/transactionfunctions";
import { Button, Picker, DatePicker, Form, Item, TextArea, TextField, View } from "@adobe/react-spectrum";
import { parseDate } from "@internationalized/date";

export default function AddIncome() {
  const [date, setDate] = useState(todaysDate());
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const addIncome = async (e)=> {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    if ( !amount || !date || !description) {
      alert('Please fill out all fields.');
      return;
    }
    try {
      const response = await fetch(
        "https://marteiduel.com/smartbudget/add-income.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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
        setDate(todaysDate());
      }
    } catch (error) {
      console.error("Error adding Income:", error);
    }
  }

  const padZero = (number) => {
    return number.toString().padStart(2, '0');
  }

  const setDay = (date) => {
    setDate(`${date.year}-${padZero(date.month)}-${padZero(date.day)}`);
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
        <h1 className="pageTitle">Add Income</h1>
      </header>
      <Form validationBehavior="native" isRequired>
        <TextField 
          label="Amount"
          placeholder="Enter Amount"
          pattern="[0-9]*\.?[0-9]+"
          onInput={(e) => handleAmountInput(e.target.value, setAmount)}
          value={amount}
          id="amount"
          isRequired
        />

        <DatePicker 
          label="Income Date" 
          onChange={setDay} 
          value={parseDate(date)}
        />
        
        <TextArea 
          label="Income Description" 
          placeholder="Enter Description" 
          onChange={(e) => setDescription(e)} 
          value={description} 
        />

        <Button variant="cta" onPress={addIncome}>Submit</Button>
      </Form>
      </View>
    </>
  );
}
