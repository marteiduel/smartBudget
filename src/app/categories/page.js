"use client";
import Link from "next/link";
import { getCategories } from "../lib/categories";
import AddCategoryPopUp from "./components/AddCategory";
import EditCategoryPopUp from "./components/EditCategory";
import { useState, useEffect } from "react";
import { getTotalBudget } from "../lib/totalBudget";

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
    async function getBudget(){
      const res = await getTotalBudget();
      const data = await res.total_budget
      setBudgetTotal(data);
    }
    getBudget();
  }, []);

  const closePopout = (e) => {
    e.preventDefault();
    setShowAddNewCategoryModal(false);
    setShowEditCategoryModal(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {showAddNewCategoryModal && <AddCategoryPopUp onClose={closePopout} />}
      {showEditCategoryModal && (
        <EditCategoryPopUp data={selectedCategory} onClose={closePopout} />
      )}
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">Categories</h1>
        <div className="reset" style={{display:"flex", flexDirection:"column", padding:"15px"}}>
          <p className="text-center">Total</p>
          <p className="text-center">${budgetTotal}</p>
        </div>
      </header>

      <div className="backBox">
        {data.map((category) => {
          return (
            <div
              key={category.categoryId}
              className="categoryItem"
              onClick={() => {
                setShowEditCategoryModal(true);
                setSelectedCategory(category);
              }}
            >
              <div className="spaceBetween">
                <p>{category.category_name}</p>
                <div>
                  <p>${category.category_budget}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="justifyCenter">
        <p
          className="lowerButtons"
          onClick={() => {
            setShowAddNewCategoryModal(true);
          }}
        >
          Add Category
        </p>
      </div>
    </div>
  );
}
