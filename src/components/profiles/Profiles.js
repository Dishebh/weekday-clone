import React, { useEffect, useState } from "react";
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
  const [options, setOptions] = useState({
    limit: 10,
    offset: 0,
  });

  const { data, loading, error } = useFetch({
    url: "https://api.weekday.technology/adhoc/getSampleJdJSON",
    options: requestOptions,
  });

  // useEffect(() => {
  //   function handleScroll() {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop !==
  //         document.documentElement.offsetHeight ||
  //       loading ||
  //       error
  //     ) {
  //       return;
  //     }
  //     setOptions((prevOptions) => ({
  //       ...prevOptions,
  //       offset: prevOptions.offset + prevOptions.limit,
  //     }));
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [loading, error]);

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
        <ProfileCard key={profile.jdUid} profile={profile} />
      ))}
    </div>
  );
}

export default Profiles;
