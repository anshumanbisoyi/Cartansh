import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  z-index: 1000;
  position: absolute;
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
  box-shadow: rgba(0, 0, 0, 0.5) 0px 16px 24px 5000px;
  ${"" /* transform: scale(0); */}
  transition: transform300ms cubic-bezier(0.57,0.21,0.69,1.25);
  ${mobile({ width: "75%" })}
`;
const Close = styled.button`
  display: flex;
  justifycontent: flex-end;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
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
  :focus {
    outline: none;
  }
`;
const Agrement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color: black;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 120%;
  height: 40px;
  background-color: white;
  margin-top: 10px;
  :hover {
    background-color: black;
    color: white;
  }
`;

const RegisterModal = ({closeModal}) => {
  return (
    <Container>
      <Wrapper>
        <Close onClick={() => closeModal(false)}> X </Close>
        <Title>Sign Up</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agrement>
            By creating an account, I consent to processing of my personal data
            in accordance with the <b>privacy policy</b>.
          </Agrement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterModal;
