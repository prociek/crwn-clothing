import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart, emailSignInStart } from "../../store/actions/user";

import {
  SignInContainer,
  SignInTitle,
  ButtonsContainer
} from "./sign-in.styles";

const SignIn = ({ onEmailSignInStart, onGoogleSignInStart }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { email, password } = credentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    onEmailSignInStart(email, password);
    setCredentials({ email: "", password: "" });
  };

  const handleGoogleSubmit = () => {
    onGoogleSignInStart();
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <ButtonsContainer>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            onClick={handleGoogleSubmit}
            type="button"
            isGoogleButton
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onGoogleSignInStart: () => dispatch(googleSignInStart()),
    onEmailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password }))
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
