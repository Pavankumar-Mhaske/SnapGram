import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";
import { useGetUserById } from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";
import ProfileForm from "@/components/forms/ProfileForm";

const UpdateProfile = () => {
  const { id } = useParams<{ id: string }>();
  // console.log("id : ", id);
  const { user } = useUserContext();
  console.log("user in main fun: ", user);

  const { data: currentUser } = useGetUserById(id || "");
  console.log("currentUser in main fun: ", currentUser);

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="flex-start gap-3 justify-start w-full max-w-5xl">
          <img
            src="/assets/icons/edit.svg"
            alt="edit"
            width={36}
            height={36}
            className="invert-white"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Edit Profile</h2>
        </div>

        <ProfileForm user={currentUser} />
      </div>
    </div>
  );
};

export default UpdateProfile;
