
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'; 
import { getAuthUser } from '@/lib/cookie';

interface PaymentComponentProps {
    orderId: string;
  }
const stripePromise = loadStripe('call the env stripe public key here.');
const userEmail = getAuthUser().email;
const fullNames = getAuthUser().firstName + " " + getAuthUser().lastName;

const PaymentComponent: React.FC<PaymentComponentProps> = ({ orderId }) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm orderId={orderId} userEmail={userEmail} fullNames={fullNames} />
        </Elements>
    );
};

export default PaymentComponent;