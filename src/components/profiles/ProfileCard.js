import { Typography } from "@mui/material";
import React from "react";
import styles from "./ProfileCard.module.css";

function ProfileCard({ profile }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img height={40} width={40} alt="logo" src={profile.logoUrl} />
        <div className={styles.title}>
          <Typography variant="h6">{profile.companyName}</Typography>
          <Typography variant="subtitle2">{profile.jobRole}</Typography>
          <Typography variant="subtitle2">{profile.location}</Typography>
        </div>
      </div>

      <Typography variant="subtitle1">
        Estimated Salary: {profile.minJdSalary} - {profile.maxJdSalary} LPA
      </Typography>
      <Typography variant="subtitle1">About Company:</Typography>
      <Typography variant="body2">About us:</Typography>
      <Typography variant="body2">{profile.jobDetailsFromCompany}</Typography>
      {profile.minExp && (
        <Typography variant="subtitle1">
          Min. Experience: {profile.minExp} years
        </Typography>
      )}
    </div>
  );
}

export default ProfileCard;
