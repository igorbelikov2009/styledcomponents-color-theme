import React, { FC } from "react";
import { CardBody, CardImage, CardList, CardListItem, CardTitle, Wrapper } from "./styles";
import { CardProps } from "../../interfaces/type";

const Card: FC<CardProps> = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />

      <CardBody>
        <CardTitle> {name} </CardTitle>

        <CardList>
          {info.map((elem) => (
            <CardListItem key={elem.title}>
              <b>{elem.title}: </b> {elem.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export default Card;
