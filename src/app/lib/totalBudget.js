export async function getTotalBudget() {
    try {
      const res = await fetch(
        "https://marteiduel.com/smartbudget/budget.php",
        {
          method: "GET",
        }
      );
      if (!res.ok) throw new Error("Not able to get total budget");
      return res.json();
    } catch (error) {
      console.error("Failed to get total budget:", error);
    }
  }