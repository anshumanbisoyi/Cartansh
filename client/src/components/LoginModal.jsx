import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height:95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  padding: 20px;
  width: 25%;
  border-radius: 15px;
  ${"" /* background-color: white; */}
  background-color: #fff;
  color: white;
  opacity: 0.98;
  z-index: 1;
  ${"" /* border: 1px solid; */}
  border-color: black;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 16px 24px 1000px;
  ${"" /* transform: scale(0); */}
  transition: transform300ms cubic-bezier(0.57,0.21,0.69,1.25);
  ${mobile({ width: "75%" })}
`;
const Close = styled.button`
display:flex;
justifyContent:flex-end;
background-color: transparent;
border:none;
font-size: 25px;
cursor:pointer;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  text-align: center;
  color: black;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 5px;
  ${"" /* border: none; */}
  ${"" /* outline: none; */}
  :focus {
    outline: none;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 15px;
  margin: 20px 10px 0px 0px;
  background-color: white;
  :hover {
    background-color: black;
    color: white;
  }
  margin-bottom: 10px;
  &:disabled {
    color: grey;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  padding: 5px;
  font-size: 12px;
  font-weight: 500;
  color: black;
  cursor: pointer;
  :hover {
    color: grey;
  }
`;
const Error = styled.a`
  color: red;
`;

const LoginModal = ({closeModal}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    closeModal(false);
  };
  return (
      <Container>
        <Wrapper>
          <Close onClick={() => closeModal(false)}> X </Close>
          <Title>Sign In</Title>
          <Form>
            <Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* <Input placeholder="Email" /> */}
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>
              Log In
            </Button>
            <br />
            {error && <Error>Something went wrong.</Error>}
            {!error && <Link>forgot password?</Link>}
          </Form>
        </Wrapper>
      </Container>
  );
};

export default LoginModal;
