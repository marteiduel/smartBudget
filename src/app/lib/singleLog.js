export async function getSingleLog(id) {
  const res = await fetch(
    `https://marteiduel.com/smartbudget/single_log.php?id=${id}`,
    {
      method: "GET",
    }
  );

  if (!res.ok) throw new Error("Error fetching Log");
  return res.json();
}

export async function deleteLog(id) {
  const res = await fetch(
    `https://marteiduel.com/smartbudget/single_log.php?id=${id}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) throw new Error("Error fetching Log");
  return res.json();
}

export async function editLog(id) {
  const res = await fetch(
    `https://marteiduel.com/smartbudget/single_log.php?id=${id}`,
    {
      method: "PUT",
    }
  );

  if (!res.ok) throw new Error("Error fetching Log");
  return res.json();
}
