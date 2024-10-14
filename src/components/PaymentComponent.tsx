import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { getAuthUser } from '@/lib/cookie';

interface PaymentComponentProps {
  orderId: string;
}

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const user = getAuthUser();

const userEmail = user?.email;
const fullNames = user?.firstName + ' ' + user?.lastName;

const PaymentComponent: React.FC<PaymentComponentProps> = ({ orderId }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm orderId={orderId} userEmail={userEmail} fullNames={fullNames} />
    </Elements>
  );
};

export default PaymentComponent;
