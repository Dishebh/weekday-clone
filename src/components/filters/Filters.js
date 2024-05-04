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
        values={roles}
        handleChange={(event) => handleChange(event, setRoles)}
        defaultFilters={roleFilters}
      />
      <MultiselectFilter
        values={minExp}
        handleChange={(event) => handleChange(event, setMinExp)}
        defaultFilters={experienceFilters}
      />
      <MultiselectFilter
        values={stack}
        handleChange={(event) => handleChange(event, setStack)}
        defaultFilters={stackFilters}
      />
      <MultiselectFilter
        values={location}
        handleChange={(event) => handleChange(event, setLocation)}
        defaultFilters={locationFilters}
      />
      <MultiselectFilter
        values={jobType}
        handleChange={(event) => handleChange(event, setJobType)}
        defaultFilters={jobTypeFilters}
      />
      <MultiselectFilter
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

export default Filters;
