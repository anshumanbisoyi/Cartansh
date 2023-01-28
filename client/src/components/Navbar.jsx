import { Badge } from "@material-ui/core";
import {
  AccountCircle,
  AccountCircleOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px " })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const Name = styled.span`
  font-size: 21px;
  padding-left: 10px;
`;

const Language = styled.span`
  font-size: 21px;
  padding-left: 10px;
`;

const Input = styled.input`
  border: none;
  :focus {
    outline: none;
  }
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  padding-bottom: 12px;
  ${mobile({ fontSize: "30px", paddingLeft: "20px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "right", paddingRight: "20px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  :hover {
  }
`;
const Account = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  :hover {
    color: black;
  }
`;
// const StyledUl = styled.ul`
//   /* list-style-type: none;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
//   background-color: black; */
// `;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  border-radius: 5px;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px;
  text-decoration: none;
  text-align: center;

  display: block;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { currentUser } = user;
  return (
    <Container>
      <Wrapper>
        <Left>
          {currentUser && <Language>Hello, </Language>}
          {currentUser && <Name>{currentUser.username}</Name>}
        </Left>
        <Center>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <Logo>Cartansh.</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to="/register"
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem>Register</MenuItem>
          </Link>
          {currentUser && (
            <MenuItem onClick={() => dispatch(logout())}>Log out</MenuItem>
          )}
          <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
            <Account>
              {currentUser ? (
                /* <AccountCircle>
                  <DropDownListContainer>
                    <Box>
                      <UL>logout</UL>
                    </Box>
                  </DropDownListContainer>
                </AccountCircle> */
                
                (
                  
                  <DropDownLi>
                <Dropbtn>
            <AccountCircle/>
          </Dropbtn>
          <DropDownContent>
            <SubA>Log out</SubA>
          </DropDownContent>
        </DropDownLi>
                
                )
                
              ) : (
                <AccountCircleOutlined
                  onClick={() => {
                    setLogin(true);
                  }}
                />
              )}
            </Account>
          </Link>

          <Link to="/cart">
            <MenuItem>
              <Badge
                badgeContent={cart.quantity}
                color="secondary"
                style={{
                  color: "black",
                }}
              >
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
