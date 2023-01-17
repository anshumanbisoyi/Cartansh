import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import RegisterPage from "./RegisterPage.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 252, 0),
      rgba(252, 252, 252, 0.3)
    ),
    url(${RegisterPage});

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    backgroundImage: ` linear-gradient(
      rgba(255, 255, 252, 0),
      rgba(252, 252, 252, 0.3)
    ), url("https://w0.peakpx.com/wallpaper/61/987/HD-wallpaper-kendall-jenner-beauty-model-monochrome-mood-people-graphy-portrait-pretty-woman.jpg")`,
  })}
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: transparent;
  border-radius: 5px;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  text-align: center;
  color: white;
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
  color: white;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 120%;
  height: 40px;
  background-color: white;
  margin-top: 10px;
  :hover {
    background-color: black;
    color: white;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
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

export default Register;
