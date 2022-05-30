import React, { useState, useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import axios from "axios";
import ResultCard from "../../../components/Cards/ResultCard";
import Link from "next/link";
import UserPropertyCard from "../../../components/Cards/UserPropertyCard";

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

const PropertyList: React.FC = () => {
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
        <UserPropertyCard key={result.id} result={result} />
      ))}
    </VStack>
  );
};

export default PropertyList;
