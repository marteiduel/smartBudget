export async function getCategories() {
  try {
    const res = await fetch(
      "https://marteiduel.com/smartbudget/categories.php",
      {
        method: "GET",
      }
    );
    if (!res.ok) throw new Error("Not able to get categories");
    return res.json();
  } catch (error) {
    console.error("Failed to get categories:", error);
  }
}

export async function addCategory(name, budget, user_id) {
  try {
    const res = await fetch(
      "https://marteiduel.com/smartbudget/categories.php",
      {
        method: "POST",
        body: JSON.stringify({ name, budget, user_id }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) throw new Error("Not able to add category");
    return res.json();
  } catch (error) {
    console.error("Failed to add category:", error);
  }
}
