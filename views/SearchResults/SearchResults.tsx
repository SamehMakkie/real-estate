import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Filter from "./Filter/Filter";
import ResultList from "./ResultList/ResultList";

const SearchResults: React.FC = () => {
  return (
    <Grid w="100%" templateColumns={"repeat(3, 1fr)"} gap={10}>
      <GridItem colSpan={[3, 3, 1]}>
        <Filter />
      </GridItem>
      <GridItem colSpan={[3, 3, 2]}>
        <ResultList />
      </GridItem>
    </Grid>
  );
};

export default SearchResults;
