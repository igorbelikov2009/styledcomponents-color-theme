import React, { FC } from "react";
import { IoSearch } from "react-icons/io5";
import { Input, InputContainer } from "./styles";

interface SearchProps {
  search: string;
  //   setSearch: React.SetStateAction<any>;
  setSearch: any;
}

const Search: FC<SearchProps> = ({ search, setSearch }) => {
  const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={handlerInput} value={search} />
    </InputContainer>
  );
};

export default Search;
