import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { selsectCurrentUser } from "./store/selector/user";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // const { onSetCurrentUser } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       onSetCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   } else {
    //     onSetCurrentUser(userAuth);
    //   }
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={props =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage {...props} />
              )
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selsectCurrentUser
});

export default connect(mapStateToProps)(App);
