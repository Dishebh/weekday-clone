export function filterData(data, filters) {
  return data?.filter((profile) => {
    return Object.entries(filters).every(([key, value]) => {
      if (Array.isArray(value)) {
        return value.length ? value.includes(profile[key]?.toString()) : true;
      }

      return value
        ? profile[key]?.toLowerCase().includes(value?.toLowerCase())
        : true;
    });
  });
}
