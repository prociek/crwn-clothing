import React from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import { googleSignInStart } from "../../store/actions/user";

import {
  SignInContainer,
  SignInTitle,
  ButtonsContainer
} from "./sign-in.styles";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  handleGoogleSubmit = () => {
    const { onGoogleSignInStart } = this.props;
    onGoogleSignInStart();
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <ButtonsContainer>
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton
              onClick={this.handleGoogleSubmit}
              type="button"
              isGoogleButton
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGoogleSignInStart: () => dispatch(googleSignInStart())
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
