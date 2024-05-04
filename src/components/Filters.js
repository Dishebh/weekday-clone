import React from "react";
import MultiselectFilter from "./MultiselectFilter";
import { roleFilters } from "./filterUtils";

function Filters() {
  const [roles, setRoles] = React.useState([]);

  function handleChangeRoles(event) {
    const {
      target: { value },
    } = event;
    setRoles(typeof value === "string" ? value.split(",") : value);
  }

  return (
    <div>
      <MultiselectFilter
        values={roles}
        handleChange={handleChangeRoles}
        defaultFilters={roleFilters}
      />
    </div>
  );
}

export default Filters;
