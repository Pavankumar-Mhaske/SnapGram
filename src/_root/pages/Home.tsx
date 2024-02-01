import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import UserCard from "@/components/shared/UserCard";
import {
  useGetPosts,
  useGetRecentPosts,
  useGetUsers,
} from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  // const {
  //   data: posts,
  //   isPending: isPostLoading,
  //   isError: isErrorPost,
  // } = useGetRecentPosts();

  const {
    data: posts,
    isPending: isPostLoading,
    fetchNextPage,
    isError: isErrorPost,
    hasNextPage,
  } = useGetPosts();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const {
    data: creators,
    isPending: isUserLoading,
    isError: isErrorCreator,
  } = useGetUsers(10);

  // if (isErrorPost || isErrorCreator) {
  //   return (
  //     <div className="flex flex-1">
  //       <div className="home-container">
  //         <p className="body-medium text-light-1">Something bad happened</p>
  //       </div>
  //       <div className="home-creators">
  //         <p className="body-medium text-light-1">Something bad happened</p>
  //       </div>
  //     </div>
  //   );
  // }

  const endPostReached =
    posts?.pages.length > 0 &&
    posts?.pages[posts?.pages.length - 1]?.documents?.length === 0;

  console.log("creators", creators);
  return (
    <div className="flex flex-1">
      {/* Posts section */}
      {!isErrorPost ? (
        <div className="home-container ">
          <div className="home-posts">
            <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
            {isPostLoading && !posts ? (
              <Loader />
            ) : endPostReached ? (
              <>
                {posts?.pages.map((item, index) => (
                  <PostCard
                    key={`page-${index}`}
                    posts={item?.documents || ""}
                  />
                ))}
                <p className="text-light-4  mb-10 text-center w-full">
                  End of posts
                </p>
              </>
            ) : (
              posts?.pages.map((item, index) => (
                <PostCard key={`page-${index}`} posts={item?.documents || ""} />
              ))
            )}
          </div>
          {hasNextPage && (
            <div ref={ref} className="mt-10">
              <Loader />
            </div>
          )}
        </div>
      ) : (
        <div className="home-container">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>

          <p className="body-medium text-light-1">
            Oops, Something bad happened
          </p>
        </div>
      )}
      {/* Creators section */}
      {!isErrorCreator ? (
        <div className="home-creators">
          <h3 className="h3-bold text-light-1">Top Creators</h3>
          {isUserLoading && !creators ? (
            <Loader />
          ) : (
            <ul className="grid 2xl:grid-cols-2 gap-6">
              {creators?.documents.map((creator) => (
                <li key={creator?.$id}>
                  <UserCard user={creator} />
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="home-creators">
          <h3 className="h3-bold text-light-1">Top Creators</h3>
          <p className="body-medium text-light-1">
            Oops, Something bad happened
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
