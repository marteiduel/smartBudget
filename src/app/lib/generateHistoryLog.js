async function generateHistoryLog(
  startingDate,
  endingDate,
  category_id,
  minAmount,
  maxAmount,
  keyword
) {
  const res = await fetch(
    `https://marteiduel.com/smartbudget/get_history_log.php?startingDate=${startingDate}&endingDate=${endingDate}&category_id=${category_id}&minAmount=${minAmount}&maxAmount=${maxAmount}&keyword=${keyword}&user_id=${1}`,
    { method: "GET" }
  );

  if (!res.ok) throw new Error("Error fetching History Log");

  return res.json();
}

export default generateHistoryLog;
