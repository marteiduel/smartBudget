export async function getCategories() {
  const res = await fetch("https://marteiduel.com/smartbudget/categories.php", {
    method: "GET",
  });

  return res.json();
}

export async function addCategory(name, budget, user_id) {
  const res = await fetch("https://marteiduel.com/smartbudget/categories.php", {
    method: "POST",
    body: JSON.stringify({ name, budget, user_id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Not able to add category");
  return res.json();
}
