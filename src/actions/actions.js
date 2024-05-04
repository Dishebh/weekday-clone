import {
  UPDATE_COMPANY_FILTER,
  UPDATE_EXPERIENCE_FILTER,
  UPDATE_JOB_TYPE_FILTER,
  UPDATE_LOCATION_FILTER,
  UPDATE_ROLE_FILTER,
  UPDATE_SALARY_FILTER,
  UPDATE_STACK_FILTER,
} from "./types";

export const updateRoleFilter = (role) => {
  return {
    type: UPDATE_ROLE_FILTER,
    role,
  };
};

export const updateExperienceFilter = (experience) => {
  return {
    type: UPDATE_EXPERIENCE_FILTER,
    experience,
  };
};

export const updateStackFilter = (stack) => {
  return {
    type: UPDATE_STACK_FILTER,
    stack,
  };
};

export const updateLocationFilter = (location) => {
  return {
    type: UPDATE_LOCATION_FILTER,
    location,
  };
};

export const updateCompanyFilter = (company) => {
  return {
    type: UPDATE_COMPANY_FILTER,
    company,
  };
};

export const updateSalaryFilter = (salary) => {
  return {
    type: UPDATE_SALARY_FILTER,
    salary,
  };
};

export const updateJobTypeFilter = (jobType) => {
  return {
    type: UPDATE_JOB_TYPE_FILTER,
    jobType,
  };
};
