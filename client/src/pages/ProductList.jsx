import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({width:"0px 20px", display:"flex", flexDirection:"column"})}
`;

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  ${mobile({ marginRight: "0px"})}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: white;
  color: black;
  :focus {
    outline: none !important;
    border: 1px solid black;
  }
  ${mobile({ margin: "5px 0px" })}
`;
const Option = styled.option``; 

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Grey</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Purple</Option>
            <Option>Orange</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XXS</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
            <Option>XXXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Option disabled selected>
              Sort
            </Option>
            <Option>Popularity</Option>
            <Option>Price: High to Low</Option>
            <Option>Price: Low to High</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
