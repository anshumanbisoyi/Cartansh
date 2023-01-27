import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import LoginPage from "../assets/LoginPage.jpeg";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${
      "" /* linear-gradient(
      rgba(255, 255, 252, 0),
      rgba(252, 252, 252, 0.5)
    ), */
    }
    url(${LoginPage});
  ${
    "" /* url("https://www.wallpapertip.com/wmimgs/18-185930_black-and-white-wallpaper-model.jpg"); */
  }
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    backgroundImage: ` linear-gradient(
      rgba(255, 255, 252, 0),
      rgba(252, 252, 252, 0.3)
    ), url("https://wallpapershome.com/images/wallpapers/kendall-jenner-2160x3840-beauty-black-white-6k-19894.jpg")`,
  })}
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  border-radius: 15px;
  background-color: white;
  color: white;
  opacity: 0.9;
  ${mobile({ width: "75%" })}
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

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
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

export default Login;
