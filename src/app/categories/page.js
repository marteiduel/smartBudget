import Link from "next/link";
import { getCategories } from "../lib/categories";
import Popout from "./Popout";

export default async function Categories() {
  const usersData = getCategories();
  const data = await usersData;

  return (
    // <Popout />

    <div>
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
        <p className="lowerButtons" onClick={openPopUp()}>
          Add Category
        </p>
      </div>
    </div>
  );
}
