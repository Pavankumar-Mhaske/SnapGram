import { Models } from "appwrite";
import React from "react";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};

const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultsProps) => {
  console.log("searched post in searchResults", searchedPosts);
  if (isSearchFetching) return <Loader />;
  // <GridPostList key={`page-${index}`} posts={item.documents} />
  if (searchedPosts && searchedPosts?.documents.length > 0)
    return <GridPostList posts={searchedPosts?.documents} />;

  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  );
};

export default SearchResults;
