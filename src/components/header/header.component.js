import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../store/selector/cart";
import { selsectCurrentUser } from "../../store/selector/user";

import {
  HeaderContainer,
  LogoContainer,
  NavOptions,
  NavOption
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <NavOptions>
      <NavOption to="/shop">SHOP</NavOption>
      <NavOption to="/contact">CONTACT</NavOption>
      {currentUser ? (
        <NavOption as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </NavOption>
      ) : (
        <NavOption to="/signin">SIGN IN</NavOption>
      )}
      <CartIcon />
    </NavOptions>
    {hidden || <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selsectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
