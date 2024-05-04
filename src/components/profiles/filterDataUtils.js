export function filterData(data, filters) {
  return data?.filter((profile) => {
    return Object.entries(filters).every(([key, value]) => {
      if (Array.isArray(value)) {
        console.log("value", value);
        console.log("profile", profile);
        console.log("key", key);

        return value.length ? value.includes(profile[key]) : true;
      }
      return value ? profile[key] === value : true;
    });
  });
}
