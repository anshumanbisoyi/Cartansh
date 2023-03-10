import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  ${mobile({ height: "25vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: grey;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: black;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
    <Link to={`/products/${item.category}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Link>
    </Container>
  );
};

export default CategoryItem;
