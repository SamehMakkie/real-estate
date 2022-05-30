import React from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteList,
  AutoCompleteItem,
} from "@choc-ui/chakra-autocomplete";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

interface AutoCompleteSearchProps {
  placeholder: string | undefined;
}

function convertToSlug(text: string) {
  return text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

const AutoCompleteSearch: React.FC<AutoCompleteSearchProps> = ({
  placeholder,
}) => {
  const router = useRouter();

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      router.push(`/search/${convertToSlug(event.target.value.trim())}`);
    }
  };

  return (
    <AutoComplete rollNavigation>
      <InputGroup w="auto" display={"inline-block"}>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <AutoCompleteInput
          w="60vw"
          variant="filled"
          placeholder={placeholder}
          onKeyDown={handleKeyPress}
          autoFocus
        />
      </InputGroup>
    </AutoComplete>
  );
};

export default AutoCompleteSearch;
