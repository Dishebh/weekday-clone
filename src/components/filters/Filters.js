import React from "react";
import { connect } from "react-redux";
import MultiselectFilter from "./MultiselectFilter";
import {
  experienceFilters,
  jobTypeFilters,
  locationFilters,
  roleFilters,
  salaryFilters,
  stackFilters,
} from "./filterUtils";
import { TextField } from "@mui/material";
import styles from "./Filters.module.css";
import {
  updateCompanyFilter,
  updateExperienceFilter,
  updateJobTypeFilter,
  updateLocationFilter,
  updateRoleFilter,
  updateSalaryFilter,
  updateStackFilter,
} from "../../actions/actions";

function Filters({ dispatch }) {
  const [roles, setRoles] = React.useState([]);
  const [minExp, setMinExp] = React.useState([]);
  const [stack, setStack] = React.useState([]);
  const [location, setLocation] = React.useState([]);
  const [jobType, setJobType] = React.useState([]);
  const [salary, setSalary] = React.useState([]);
  const [companyName, setCompanyName] = React.useState("");

  function handleChange(event, setFilters, actionCreator) {
    const {
      target: { value },
    } = event;
    setFilters(typeof value === "string" ? value.split(",") : value);
    dispatch(actionCreator(value)); // Dispatch action with the updated filter value
  }

  return (
    <div className={styles.filtersContainer}>
      <MultiselectFilter
        label="Roles"
        values={roles}
        handleChange={(event) =>
          handleChange(event, setRoles, updateRoleFilter)
        }
        defaultFilters={roleFilters}
      />
      <MultiselectFilter
        label="Experience"
        values={minExp}
        handleChange={(event) =>
          handleChange(event, setMinExp, updateExperienceFilter)
        }
        defaultFilters={experienceFilters}
      />
      <MultiselectFilter
        label="Location"
        values={location}
        handleChange={(event) =>
          handleChange(event, setLocation, updateLocationFilter)
        }
        defaultFilters={locationFilters}
      />
      <MultiselectFilter
        label="Salary"
        values={salary}
        handleChange={(event) =>
          handleChange(event, setSalary, updateSalaryFilter)
        }
        defaultFilters={salaryFilters}
      />
      <TextField
        id="outlined-basic"
        label="Search company name"
        variant="outlined"
        size="small"
        value={companyName}
        onChange={(event) => {
          setCompanyName(event.target.value);
          dispatch(updateCompanyFilter(event.target.value)); // Dispatch action to update company name filter
        }}
      />
    </div>
  );
}

export default connect()(Filters); // Connect the component to the Redux store without mapStateToProps
