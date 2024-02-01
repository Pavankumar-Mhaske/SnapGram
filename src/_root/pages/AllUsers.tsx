import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AllUsers = () => {
  const { toast } = useToast();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const {
    data: creators,
    isPending: isUserLoading,
    fetchNextPage,
    isError: isErrorCreators,
    hasNextPage,
  } = useGetUsers();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isErrorCreators) {
    toast({
      title: "Something went wrong.",
    });
    return;
  }

  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>

        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          creators?.pages.map((creator, index) => (
            <UserCard key={`page-${index}`} users={creator?.documents || ""} />
          ))
        )}
      </div>
      {hasNextPage && (
        <div ref={ref} className="mt-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default AllUsers;
