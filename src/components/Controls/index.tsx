import React, { FC, SetStateAction } from "react";
import { Wrapper } from "./styles";
import Search from "../Search";
import { CustomSelect } from "../CustomSelect";
import { optionsControls } from "../../data";

interface ControlsProps {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<SetStateAction<any>>;
}

const Controls: FC<ControlsProps> = ({ search, setSearch, region, setRegion }) => {
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
