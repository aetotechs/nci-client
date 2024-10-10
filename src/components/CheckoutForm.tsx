import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
interface CheckoutProps{
    orderId: string;
    userEmail: string;
    fullNames: string;
}

const CheckoutForm = ({ orderId, userEmail, fullNames }:CheckoutProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');
  const [isPaymentProcessing, setPaymentProcessing] = useState(false);
  const [isPaymentComplete, setPaymentComplete] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setPaymentProcessing(true);

    const cardElement = elements?.getElement(CardElement);

    try {
      // Send request to backend to create payment intent
      const paymentIntentResponse = await axios.post(
        'http://localhost:8080/payments',
        { orderId }
      );

      const { clientSecret } = paymentIntentResponse.data;

      const paymentIntentResult = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement!, // Non-null assertion operator
          billing_details: {
            email: userEmail,
            name: fullNames,
          },
        },
      });
      if (paymentIntentResult) {
        const { error, paymentIntent } = paymentIntentResult; 
  
        if (error) {
            setErrorMessage(error.message || "An unknown error occurred."); // Provide a default value
        } else {
        setPaymentComplete(true);

        await axios.patch('http://localhost:8080/payments/confirm?paymentIntentId' + paymentIntent.id);
      }
    } 
}
    
    catch (error:any) {
      setErrorMessage(error.response?.data?.message || 'An error occurred while processing the payment');
    } finally {
      setPaymentProcessing(false);
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="card-element">Card details</label>
      <CardElement id="card-element" options={cardStyle} />
      <button type="submit" disabled={!stripe || isPaymentProcessing}>
        {isPaymentProcessing ? 'Processing...' : 'Pay'}
      </button>
      {errorMessage && <div className="card-errors" role="alert">{errorMessage}</div>}
      {isPaymentComplete && <div>Payment Complete!</div>}
    </form>
  );
};

export default CheckoutForm;