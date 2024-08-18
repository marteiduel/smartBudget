"use client";
import Link from "next/link";
import { getCategories } from "../lib/categories";
import AddCategoryPopUp from "./components/AddCategory";
import EditCategoryPopUp from "./components/EditCategory";
import { useState, useEffect } from "react";
import { getTotalBudget } from "../lib/totalBudget";
import { View, Cell, Column, Row, TableView, TableBody, TableHeader, Button } from '@adobe/react-spectrum';

export default function Categories() {
  const [loading, isLoading] = useState(true);
  const [showAddNewCategoryModal, setShowAddNewCategoryModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [data, setData] = useState([]);
  const [budgetTotal, setBudgetTotal] = useState(0);

  useEffect(() => {
    getCategories().then((data) => {
      setData(data);
      isLoading(false);
    });
    async function getBudget() {
      const res = await getTotalBudget();
      const data = await res.total_budget;
      setBudgetTotal(data);
    }
    getBudget();
  }, []);

  const closePopout = () => {
    setShowAddNewCategoryModal(false);
    setShowEditCategoryModal(false);
  };

  const handleRowAction = (key) => {
    const selected = data.find((item) => item.categoryId === key);
    console.log("Row action detected:", selected); // Debugging line
    setSelectedCategory(selected);
    setShowEditCategoryModal(true);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <View
      backgroundColor="gray-50"
      padding="size-100"
      borderRadius="medium"
      borderWidth="thin"
      borderColor="blue-500"
    >
      {showAddNewCategoryModal && <AddCategoryPopUp onClose={closePopout} />}
      {showEditCategoryModal && selectedCategory && (
        <EditCategoryPopUp data={selectedCategory} onClose={closePopout} />
      )}
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">Categories</h1>
        <div className="reset" style={{ display: "flex", flexDirection: "column", padding: "15px" }}>
          <p className="text-center">Total</p>
          <p className="text-center">${budgetTotal}</p>
        </div>
      </header>

      <TableView aria-label="Categories Table" selectionMode="single" onAction={handleRowAction}>
        <TableHeader>
          <Column key="name">Category Name</Column>
          <Column key="budget">Budget</Column>
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <Row key={item.categoryId}>
              <Cell>{item.category_name}</Cell>
              <Cell>${item.category_budget}</Cell>
            </Row>
          )}
        </TableBody>
      </TableView>

      <View marginTop="size-200" alignSelf="center">
        <Button variant="cta" onPress={() => setShowAddNewCategoryModal(true)}>
          Add Category
        </Button>
      </View>
    </View>
  );
}
