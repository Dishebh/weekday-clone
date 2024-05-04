import { UPDATE_FILTER } from "../actions/types";

const initialState = {
  filters: {},
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        // Update state based on selected filter
      };
    default:
      return state;
  }
};

export default filterReducer;
