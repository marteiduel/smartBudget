async function getHistoryLog() {
  const res = await fetch(
    "https://marteiduel.com/smartbudget/get_history_log.php",
    { cache: "no-cache" }
  );
  if (!res.ok) throw new Error("Error fetching History Log");

  return res.json();
}

export default getHistoryLog;
