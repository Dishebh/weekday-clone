import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import useFetch from "../../hooks/useFetch";
import styles from "./Profiles.module.css";
import { connect } from "react-redux";
import { filterData } from "./filterDataUtils";

const url = "https://api.weekday.technology/adhoc/getSampleJdJSON";

function Profiles({ filters }) {
  const [body, setBody] = useState({
    limit: 10,
    offset: 0,
  });

  const { data, loading, error } = useFetch({ url, body });

  const [allData, setAllData] = useState([]);

  const filteredData = filterData(allData, filters.filters);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 <
        document.documentElement.offsetHeight
      ) {
        return;
      }

      setBody((prevBody) => ({
        ...prevBody,
        offset: prevBody.offset + prevBody.limit,
      }));
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, error]);

  useEffect(() => {
    if (data) {
      setAllData((prevData) => {
        return [...prevData, ...data.jdList];
      });
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      {filteredData?.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(Profiles);
