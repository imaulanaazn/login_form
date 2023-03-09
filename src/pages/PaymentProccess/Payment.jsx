import React from 'react'
import './index.css'
import { useState } from 'react';
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';

export default function Payment() {
    const publishableKey =
    'pk_test_51KAs34JBPfp3exDP5KZ00E3s265wlWQ2O3pKoxEWxuOhzpsfVTqZ3qPMgtLweUqwbmabFS1xrTboUY6MxEAMsBOG00pmyBOyR8';
  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState({
    name: 'Headphone',
    price: 5,
  });
  const priceForStripe = product.price * 100;

  const handleSuccess = () => {
    console.log({
      icon: 'success',
      title: 'Payment was successful',
      time: 4000,
    })
  };
  const handleFailure = () => {
    console.log({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };
  const payNow = async token => {
    try {
      const response = await axios({
        url: 'http://localhost:5000/payment',
        method: 'post',
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };
  return (
    <div class="payment-container">

    <form action="">

        <div class="row">

            <div class="col">

                <h3 class="title">billing address</h3>

                <div class="inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="john deo" />
                </div>
                <div class="inputBox">
                    <span>email :</span>
                    <input type="email" placeholder="example@example.com" />
                </div>
                <div class="inputBox">
                    <span>address :</span>
                    <input type="text" placeholder="room - street - locality" />
                </div>
                <div class="inputBox">
                    <span>city :</span>
                    <input type="text" placeholder="mumbai" />
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>state :</span>
                        <input type="text" placeholder="india" />
                    </div>
                    <div class="inputBox">
                        <span>zip code :</span>
                        <input type="text" placeholder="123 456" />
                    </div>
                </div>

            </div>

            <div class="col">

                <h3 class="title">payment</h3>

                <div class="inputBox">
                    <span>cards accepted :</span>
                    <img src="/card_img.png" alt="" />
                </div>
                <div class="inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="mr. john deo" />
                </div>
                <div class="inputBox">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444" />
                </div>
                <div class="inputBox">
                    <span>exp month :</span>
                    <input type="text" placeholder="january" />
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>exp year :</span>
                        <input type="number" placeholder="2022" />
                    </div>
                    <div class="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234" />
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="proceed to checkout" class="submit-btn" />

    </form>

    <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is $${product.price}`}
        token={payNow}
      />
</div>    
  )
}
