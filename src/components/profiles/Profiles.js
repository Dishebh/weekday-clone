import React from "react";
import ProfileCard from "./ProfileCard";
import useFetch from "../../hooks/useFetch";
import styles from "./Profiles.module.css";

const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

function Profiles() {
  const { data, loading, error } = useFetch({
    url: "https://api.weekday.technology/adhoc/getSampleJdJSON",
    options: requestOptions,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div className={styles.container}>
      {data.jdList?.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

export default Profiles;
