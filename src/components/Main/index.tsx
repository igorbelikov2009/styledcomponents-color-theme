import React, { FC } from "react";
import { Wrapper } from "./styles";
import { Container } from "../Container";

interface MainProps {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <Wrapper>
      <Container> {children} </Container>
    </Wrapper>
  );
};

export default Main;
