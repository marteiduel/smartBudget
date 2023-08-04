async function getSingleLog() {
  const res = await fetch(
    `https://marteiduel.com/smartbudget/get_single_log.php&id=${id}`
  );

  if (!res.ok) throw new Error("Error fetching Log");
  return res.json();
}

export default getSingleLog;
