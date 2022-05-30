import React, { useState, useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import axios from "axios";
import ResultCard from "../../../components/Cards/ResultCard";
import Link from "next/link";

type Data = {
  id: string;
  shortAddress: string;
  fullAddress: string;
  city: string;
  numOfBedrooms: number;
  numOfBathrooms: number;
  propertySize: number;
  lotSize: number;
  price: number;
  img: string;
};

type GetResultResponse = {
  data: Data[] | undefined;
};

const ResultList: React.FC = () => {
  const [results, setResults] = useState<Data[]>();

  useEffect(() => {
    const fetchData = async () => {
      const { data, status } = await axios.get<Data[]>("/api/search");
      setResults(data);
    };

    fetchData();
  }, []);

  return (
    <VStack w="100%" px={5} spacing={14} alignItems="start">
      {results?.map((result: Data) => (
        <Link key={result.id} href={`/property/${result.id}`}>
          <a style={{ width: "100%" }}>
            <ResultCard key={result.id} result={result} />
          </a>
        </Link>
      ))}
    </VStack>
  );
};

export default ResultList;
