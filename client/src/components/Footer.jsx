import {
  EmailOutlined,
  Facebook,
  Instagram,
  PhoneOutlined,
  Pinterest,
  RoomOutlined,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  margin: 20px 20px;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-size: 1.5em;
  ${mobile({ textAlign: "center" })}
`;
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ textAlign: "center" })}
`;
const SocialContainer = styled.div`
  display: flex;
  ${mobile({ justifyContent: "center" })}
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  ${mobile({ textAlign: "center" })}
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  ${'' /* display: flex;
  flex-direction: column; */}
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8", borderRadius: "10px", marginTop: "10px", textAlign: "center" })}
`;
const ContactItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  ${mobile({ justifyContent: "center" })}
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Cartansh.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet
          sit inventore aliquid ad facere id maxime blanditiis exercitationem
          illum optio nisi excepturi, accusamus qui. In, iure! Quaerat, sit
          reiciendis.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Details</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Collection</ListItem>
          <ListItem>Women's Collection</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms&Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomOutlined style={{ marginRight: "10px" }} /> 722 Palo Alto,
          California US 98405
        </ContactItem>
        <ContactItem>
          <PhoneOutlined style={{ marginRight: "10px" }} /> +1 234 56 7890
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} /> contact@cartansh.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};
export default Footer;
