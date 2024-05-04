import React from "react";
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
import { connect } from "react-redux";

function Filters() {
  const [roles, setRoles] = React.useState([]);
  const [minExp, setMinExp] = React.useState([]);
  const [stack, setStack] = React.useState([]);
  const [location, setLocation] = React.useState([]);
  const [jobType, setJobType] = React.useState([]);
  const [salary, setSalary] = React.useState([]);
  const [companyName, setCompanyName] = React.useState("");

  function handleChange(event, setFilters) {
    const {
      target: { value },
    } = event;
    setFilters(typeof value === "string" ? value.split(",") : value);
  }

  return (
    <div className={styles.filtersContainer}>
      <MultiselectFilter
        label="Roles"
        values={roles}
        handleChange={(event) => handleChange(event, setRoles)}
        defaultFilters={roleFilters}
      />
      <MultiselectFilter
        label="Experience"
        values={minExp}
        handleChange={(event) => handleChange(event, setMinExp)}
        defaultFilters={experienceFilters}
      />
      <MultiselectFilter
        label="Stack"
        values={stack}
        handleChange={(event) => handleChange(event, setStack)}
        defaultFilters={stackFilters}
      />
      <MultiselectFilter
        label="Location"
        values={location}
        handleChange={(event) => handleChange(event, setLocation)}
        defaultFilters={locationFilters}
      />
      <MultiselectFilter
        label="Remote"
        values={jobType}
        handleChange={(event) => handleChange(event, setJobType)}
        defaultFilters={jobTypeFilters}
      />
      <MultiselectFilter
        label="Salary"
        values={salary}
        handleChange={(event) => handleChange(event, setSalary)}
        defaultFilters={salaryFilters}
      />
      <TextField
        id="outlined-basic"
        label="Search company name"
        variant="outlined"
        size="small"
        value={companyName}
        onChange={(event) => setCompanyName(event.target.value)}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(Filters);
