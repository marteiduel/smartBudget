async function getCategories() {
  const res = await fetch(
    "https://marteiduel.com/smartbudget/get_categories.php"
  );

  if (!res.ok) throw new Error("Error fetching categories");
  return res.json();
}

export default getCategories;
