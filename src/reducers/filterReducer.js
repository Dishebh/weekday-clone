import {
  UPDATE_COMPANY_FILTER,
  UPDATE_EXPERIENCE_FILTER,
  UPDATE_JOB_TYPE_FILTER,
  UPDATE_LOCATION_FILTER,
  UPDATE_ROLE_FILTER,
  UPDATE_SALARY_FILTER,
  UPDATE_STACK_FILTER,
} from "../actions/types";

const initialState = {
  filters: {},
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROLE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, jobRole: action.role },
      };
    case UPDATE_EXPERIENCE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, minExp: action.experience },
      };
    case UPDATE_STACK_FILTER:
      return {
        ...state,
        filters: { ...state.filters, stack: action.stack },
      };
    case UPDATE_LOCATION_FILTER:
      return {
        ...state,
        filters: { ...state.filters, location: action.location },
      };
    case UPDATE_COMPANY_FILTER:
      return {
        ...state,
        filters: { ...state.filters, companyName: action.company },
      };
    case UPDATE_SALARY_FILTER:
      return {
        ...state,
        filters: { ...state.filters, minJdSalary: action.salary },
      };
    case UPDATE_JOB_TYPE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, jobType: action.jobType },
      };
    default:
      return state;
  }
};

export default filterReducer;
