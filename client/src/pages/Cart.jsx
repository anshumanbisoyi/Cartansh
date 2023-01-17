import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  font-weight: 600;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
flex:2;
display:flex;
`;

const Image = styled.img`
width: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

// const ProductColor = styled.div`
// width: 20px;
// height: 20px;
// border-radius:50%;
// background-color: ${props=>props.color}
// `;

const ProductSize = styled.span``;

const Price = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ justifyContent:"space-between",flexDirection: "row", padding: "10px" })}
`;

const ProductAmountContainer=styled.div`
display:flex;
align-items:center;
margin-bottom: 20px;
`;
const ProductQuantity = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr=styled.hr`
background-color: #eee;
border:none;
height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  height: 52vh;
  `;

const SummaryTitle= styled.h1`
font-weight: 300;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryText= styled.span``;
const SummaryPrice= styled.span``;
const SummaryButton=styled.button`
width:100%;
padding: 10px;
background-color: white;
border-radius: 5px;
font-weight: 800;
:hover{
    background-color: black;
    color: white;
}
cursor:pointer;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue</TopButton>
          <TopTexts>
            <TopText>Cart(2)</TopText>
            <TopText>Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://orbitvu.com/wp-content/uploads/2021/11/sport-shoe-white-background.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Slazenger Shoes
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 103849203933
                  </ProductId>
                  <ProductSize>
                    <b>Size:</b> 36.5
                  </ProductSize>
                  {/* <ProductColor color="orange" /> */}
                </Details>
              </ProductDetail>
              <Price>
                <ProductAmountContainer>
                  <Add />
                  <ProductQuantity>2</ProductQuantity>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>₹ 999</ProductPrice>
              </Price>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://media.istockphoto.com/id/629483218/photo/red-jacket-isolated-on-white-background-clipping-path.jpg?s=612x612&w=0&k=20&c=yyvsPac98b6X59ECGeuTsji8vWaR9jA9Y3a9ps4pffE=" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Winter Jacket
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 103849324133
                  </ProductId>
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                  {/* <ProductColor color="maroon" /> */}
                </Details>
              </ProductDetail>
              <Price>
                <ProductAmountContainer>
                  <Add />
                  <ProductQuantity>1</ProductQuantity>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>₹ 1499</ProductPrice>
              </Price>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>₹2498</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Shipping Cost</SummaryText>
              <SummaryPrice>₹49</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Discount</SummaryText>
              <SummaryPrice>- ₹49</SummaryPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem type="total">
              <SummaryText>Total</SummaryText>
              <SummaryPrice>₹2498</SummaryPrice>
            </SummaryItem>
            <SummaryButton>Pay</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
