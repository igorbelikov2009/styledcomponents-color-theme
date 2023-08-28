import React, { FC } from "react";
import { Wrapper } from "./styles";

interface ListProps {
  children: React.ReactNode;
}

const List: FC<ListProps> = ({ children }) => {
  return <Wrapper> {children} </Wrapper>;
};

export default List;
