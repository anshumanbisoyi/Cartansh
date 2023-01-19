import { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
const [filters, setFilters] =useState({});
const [sort, setSort] = useState("newest");
const handleFilters = (e)=> {
  const value = e.target.value;
  setFilters({
    ...filters,
    [e.target.name]: value,
  })
}
const handleSort = (e) =>{
  const value = e.target.value;
  setSort({
    sort: value
  })
};
// console.log(filters);
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Grey</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Purple</Option>
            <Option>Orange</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
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
          <Select onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price: Low to High</Option>
            <Option value="desc">Price: High to Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat = {cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
