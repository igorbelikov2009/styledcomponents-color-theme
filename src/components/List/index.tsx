import React, { FC } from "react";
import { Wrapper } from "./styles";

interface ListProps {
  // children: React.ReactNode;
  children: any;
}

const List: FC<ListProps> = ({ children }) => {
  return <Wrapper> {children} </Wrapper>;
};

export default List;
