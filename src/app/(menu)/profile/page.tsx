import PageTemplate from "@/components/PageTemplate";
import ProfileContent from "@/features/routes/profile/content";
import React from "react";

const Profile = () => {
  return (
    <PageTemplate pageTitle={"Profile"}>
      <ProfileContent />
    </PageTemplate>
  );
};

export default Profile;
