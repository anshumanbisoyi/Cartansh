import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../redux/cartRedux";
import { addProduct } from "../redux/cartRedux";
import DeleteIcon from "@material-ui/icons/Delete";

const KEY = process.env.REACT_APP_STRIPE;
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
  flex: 2;
  display: flex;
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

const ProductId = styled.span`
  ${mobile({ fontSize:10 })}
`;

const ProductSize = styled.span``;

const Price = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "10px",
  })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
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

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  height: 52vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryText = styled.span``;
const SummaryPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 5px;
  font-weight: 800;
  :hover {
    background-color: white;
    color: black;
  }
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total,
        });
        navigate("/success", {
          state: {
            stripeData: res.data,
            products: cart,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  const handleRemove= (cartItem) =>{
   dispatch(removeProduct(cartItem));
  }
  const handleAdd = (cartItem) => {
    dispatch(addProduct(cartItem));
  };

  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue</TopButton>
          <TopTexts>
            <TopText>Cart({cart.quantity})</TopText>
            <TopText>Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                    <DeleteIcon onClick={() => handleRemove(product)} />
                  </Details>
                </ProductDetail>
                <Price>
                  <ProductAmountContainer>
                    <Add onClick={() => handleAdd(product)} />
                    <ProductQuantity>{product.quantity}</ProductQuantity>
                    <Remove onClick={() => handleRemove(product)} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ???{product.price * product.quantity}
                  </ProductPrice>
                </Price>
              </Product>
            ))}
            <Hr />
          </Info>
          {cart.quantity !== 0 && <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>???{cart.total}</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Shipping Cost</SummaryText>
              <SummaryPrice>???99</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Discount</SummaryText>
              <SummaryPrice>- ???99</SummaryPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem type="total">
              <SummaryText>Total</SummaryText>
              <SummaryPrice>???{cart.total}</SummaryPrice>
            </SummaryItem>
            <StripeCheckout
              name="Cartansh"
              description={`Your total bill is ???${cart.total}`}
              token={onToken}
              stripeKey={KEY}
            >
              <SummaryButton>Pay</SummaryButton>
            </StripeCheckout>
          </Summary>}
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
