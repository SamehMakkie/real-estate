import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import AutoCompleteSearch from "../../components/AutoComplete/AutoCompleteSearch";
import PageControl from "../../components/Pagination/PageControl";
import Footer from "../../views/navigation/Footer/Footer";
import Navbar from "../../views/navigation/Navbar/Navbar";
import SearchResults from "../../views/SearchResults/SearchResults";

function convertToText(slug: string | undefined) {
  return slug?.replace(/-/g, " ").replace(/\b[a-z]/g, function () {
    return arguments[0].toUpperCase();
  });
}

const Search = () => {
  const router = useRouter();
  const { slug } = router.query;
  const searchText = convertToText(Array.isArray(slug) ? slug[0] : slug!);

  return (
    <VStack px={16} spacing={10}>
      <Navbar />
      <VStack w="100%" textAlign={"center"} minH={"56vh"} spacing={10}>
        <AutoCompleteSearch placeholder={searchText} />
        <Heading as="h1">{searchText}</Heading>
        <SearchResults />
      </VStack>
      <PageControl />
      <Footer />
    </VStack>
  );
};

export default Search;
