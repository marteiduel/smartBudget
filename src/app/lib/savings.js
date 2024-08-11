export async function getSavings() {
    try {
      const res = await fetch(
        "https://marteiduel.com/smartbudget/savings.php",
        {
          method: "GET",
        }
      );
      if (!res.ok) throw new Error("Not able to get savings");
      return res.json();
    } catch (error) {
      console.error("Failed to get savings:", error);
    }
  }