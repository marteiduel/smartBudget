async function generateHistoryLog(
  startingDate,
  endingDate,
  category,
  minAmount,
  maxAmount,
  keyword
) {
  const res = await fetch(
    `https://marteiduel.com/smartbudget/generate_history_log.php?startingDate=${startingDate}&endingDate=${endingDate}&category=${category}&minAmount=${minAmount}&maxAmount=${maxAmount}&keyword=${keyword}`
  );
  if (!res.ok) throw new Error("Error fetching History Log");

  return res.json();
}

export default generateHistoryLog;
