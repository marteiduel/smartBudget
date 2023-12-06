const initialState = {
  loading: false,
  showAdvancedOptions: false,
  categoriesList: [],
  category: "",
  minAmount: "",
  maxAmount: "",
  keyword: "",
  // transactionType: "", // Uncomment if you plan to use this
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return { ...state, loading: !state.loading };
    case "TOGGLE_ADVANCED_OPTIONS":
      return { ...state, showAdvancedOptions: !state.showAdvancedOptions };
    case "SET_CATEGORIES":
      return { ...state, categoriesList: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_MIN_AMOUNT":
      return { ...state, minAmount: action.payload };
    case "SET_MAX_AMOUNT":
      return { ...state, maxAmount: action.payload };
    case "SET_KEYWORD":
      return { ...state, keyword: action.payload };
    default:
      return state;
  }
}
