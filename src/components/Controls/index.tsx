import React, { FC, useState, useEffect } from "react";
import { Wrapper } from "./styles";
import Search from "../Search";
import { CustomSelect } from "../CustomSelect";
import { optionsControls } from "../../data";

interface ControlsProps {
  onSearch: (search: string, regionValue: string) => void;
}

const Controls: FC<ControlsProps> = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<React.SetStateAction<any>>("");

  useEffect(() => {
    // console.log(region);
    // Подготовим даные: получаем либо значение селектора, либо пустую строку
    const regionValue = region || "";
    onSearch(search, regionValue);
  }, [onSearch, region, search]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={optionsControls}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};

export default Controls;
