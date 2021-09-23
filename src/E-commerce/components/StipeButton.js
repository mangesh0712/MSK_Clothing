import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  /// cause stripe want price in cents/paises
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JcjE6SFTVfPT9Q1PowGeeHnbvGZVOK8DA67UHCAEib4uijuxTSxbFZeZNzWTFYxyqRmbwPgIuyKhqxEePhbKW9e00knyVifR9";

  const onToken = (token) => {
    console.log(token, "token");
    alert("payment successful");
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={publishableKey}
      label="Pay Now"
      name="MSK Clothing"
      currency="INR"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/ZYW3VTp/brown-brim.png" // the pop-in header image (default none)
      description={`Your total is ${price}.`}
      amount={priceForStripe}
      panelLabel="Pay Now"
    />
  );
}

export default StripeCheckoutButton;
