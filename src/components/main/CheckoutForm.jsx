import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51QpV3YEF0ekL8IavNeEklhMO3ADIE7N4Sdv0Dwm3USfUMtQSyGrOZbhGXylweVcmGlcvdPEQBPAnwdeJrfaynjBk00ISOMMs5k'); // Replace with your key

const CheckoutForm = () => {
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement)
        const { token, error } = await stripe.createToken(card);

        if (error) {
            setError(error.message);
        } else {
            try {
                const response = await fetch('https://hikmat059-001-site1.ptempurl.com/api/Payment/payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer <your_bearer_token>',
                    },
                    body: JSON.stringify({
                        token: token.id,
                        amount: 10,
                    }),
                });

                const result = await response.json();

                if (result.success) {
                    console.log('Payment succeeded');
                } else {
                    console.log('Payment failed');
                }
            } catch (err) {
                console.error('Error:', err);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm my-[20px] mx-auto p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-lg">
            <h2 className="text-center text-xl font-semibold mb-6">Payment</h2>
            <div className="mb-4">
                <CardElement className="p-3 border border-gray-300 rounded-md shadow-sm" />
            </div>
            {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}
            <button
                type="submit"
                disabled={!stripe}
                className={`w-full py-3 bg-green-500 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 ${!stripe ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
            >
                Pay
            </button>
        </form>

    );
};

const PaymentPage = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default PaymentPage;
