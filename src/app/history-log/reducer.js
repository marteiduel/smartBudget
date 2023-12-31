"use client";
export const initialState = {
  loading: false,
  showAdvancedOptions: false,
  categoriesList: [],
  startingDate: "",
  endingDate: "",
  category_id: "",
  minAmount: "",
  maxAmount: "",
  keyword: "",
  showReportModal: false,
  noTransactionsFound: false,
  // transactionType: "", // Uncomment if you plan to use this
};

export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return { ...state, loading: !state.loading };
    case "TOGGLE_ADVANCED_OPTIONS":
      return { ...state, showAdvancedOptions: !state.showAdvancedOptions };
    case "SET_SHOW_REPORT_MODAL":
      return { ...state, showReportModal: action.payload };
    case "SET_NO_TRANSACTIONS_FOUND":
      return { ...state, noTransactionsFound: action.payload };
    case "SET_STARTING_DATE":
      return { ...state, startingDate: action.payload };
    case "SET_ENDING_DATE":
      return { ...state, endingDate: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categoriesList: action.payload };
    case "SET_CATEGORY":
      return { ...state, category_id: action.payload };
    case "SET_MIN_AMOUNT":
      return { ...state, minAmount: action.payload };
    case "SET_MAX_AMOUNT":
      return { ...state, maxAmount: action.payload };
    case "SET_KEYWORD":
      return { ...state, keyword: action.payload };
    case "SET_REPORT_TRANSACTIONS":
      return { ...state, transactions: action.payload };
    default:
      return state;
  }
}
