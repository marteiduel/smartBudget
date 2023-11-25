"use client";
import Link from "next/link";
import { getCategories } from "../lib/categories";
import Popout from "../review-budget/[id]/components/AddCategory";
import { useState, useEffect } from "react";

export default function Categories() {
  const [loading, isLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setData(data);
      isLoading(false);
    });
  }, []);

  function openPopout(e) {
    e.preventDefault();
    setShowModal(true);
  }

  const closePopout = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {showModal && <Popout onClose={closePopout} />}
      <header className="header">
        <Link className="back" href="/">
          Back
        </Link>
        <h1 className="pageTitle">Categories</h1>
      </header>

      <div className="backBox">
        {data.map((category) => {
          return (
            <div key={category.categoryId} className="categoryItem">
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
        <p className="lowerButtons" onClick={openPopout}>
          Add Category
        </p>
      </div>
    </div>
  );
}
