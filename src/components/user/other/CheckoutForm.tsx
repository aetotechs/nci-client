import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios, { AxiosError } from 'axios';
import { getUserToken } from '@/utils/cookies/UserCookieManager';
import { ConfirmPayment, CreatePayment } from '@/utils/hooks/api-routes';

interface CheckoutProps {
  orderId: string;
  userEmail: string;
  fullNames: string;
}

const CheckoutForm = ({ orderId, userEmail, fullNames }: CheckoutProps) => {
  const token: string | null = getUserToken();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');
  const [isPaymentProcessing, setPaymentProcessing] = useState(false);
  const [isPaymentComplete, setPaymentComplete] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setPaymentProcessing(true);

    const cardElement = elements?.getElement(CardElement);

    if (!stripe || !elements) {
      setErrorMessage('Stripe has not loaded.');
      setPaymentProcessing(false);
      return;
    }

    try {
      const paymentIntentResponse = await axios.post(
        `${CreatePayment}?orderID=${orderId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const { clientSecret } = paymentIntentResponse.data;

      const paymentIntentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement!,
          billing_details: {
            email: userEmail,
            name: fullNames
          }
        }
      });

      if (paymentIntentResult) {
        const { error, paymentIntent } = paymentIntentResult;

        if (error) {
          setErrorMessage(error.toString() || 'An unknown error occurred.');
        } else {
          setPaymentComplete(true);
          try {
            const cstatus: String = await axios.patch(
              `${ConfirmPayment}?paymentIntentId=${paymentIntent?.id}`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            );

            if (cstatus === 'succeeded') {
            }
            console.log(
              'Successfully confirmed client payment with status ' + JSON.stringify(cstatus)
            );
          } catch (err: AxiosError | any) {
            setErrorMessage(err.toString() || 'An error occurred while confirming the payment.');
          }
        }
      }
    } catch (error: AxiosError | any) {
      setErrorMessage(error.message.toString() || 'An error occurred while procesing the payment.');
    } finally {
      setPaymentProcessing(false);
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        backgroundColor: 'white',
        padding: '20px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[10px] p-4">
      <label htmlFor="card-element" className="text-xl font-medium">
        Card Details
      </label>
      <CardElement
        id="card-element"
        options={cardStyle}
        className="my-3 border p-3 rounded-[5px]"
      />
      <button
        type="submit"
        disabled={!stripe || isPaymentProcessing || isPaymentComplete}
        className="bg-primary w-full rounded-[6px] py-2 text-white"
      >
        {isPaymentProcessing
          ? 'Processing...'
          : isPaymentComplete
            ? 'Payment Complete!'
            : 'Make Payment'}
      </button>
      {errorMessage && (
        <div className="card-errors text-red-600 my-3" role="alert">
          {errorMessage}
        </div>
      )}
      {isPaymentComplete && <div>Payment Complete!</div>}
    </form>
  );
};

export default CheckoutForm;
