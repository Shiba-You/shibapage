import CustomCard from "@/features/common/CustomCard";
import PageTitle from "@/features/common/PageTitle";
import RouteButton from "@/features/common/RouteButton";
import React from "react";

const Profile = () => {
  return (
    <div>
      <PageTitle title="Profile" />
      <CustomCard>出身</CustomCard>
      <RouteButton label="Go Home" route="/" buttonType="Custom" />
    </div>
  );
};

export default Profile;
