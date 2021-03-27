import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51IOUf2JIrl0Qec37i4AczuoMhSwjfqpgpd0PjLMhHuxAdWo1gHGq6NCUre0h3UcSFVV94qvWEsujONY0QMyl2BOA001kSAMF9C";

  const onToken = token => {
    axios({
      url: "/payment",
      method: "post",
      data: {
        amount: stripePrice,
        token
      }
    })
      .then(res => {
        console.log(res);
        alert("succes payment");
      })
      .catch(err => {
        console.log("Payment error: ", JSON.parse(err));
        alert("There was an issue with your payment. Please try again later.");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      style={{ marginLeft: "auto", marginTop: "28px" }}
    />
  );
};

export default StripeCheckoutButton;
