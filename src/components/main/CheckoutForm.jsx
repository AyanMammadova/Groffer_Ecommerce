import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import apiInstance from '../../services/axiosInstance';
import { useNavigate } from 'react-router-dom';

// Load Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51QpV3YEF0ekL8IavNeEklhMO3ADIE7N4Sdv0Dwm3USfUMtQSyGrOZbhGXylweVcmGlcvdPEQBPAnwdeJrfaynjBk00ISOMMs5k'); // Replace with your key

const CheckoutForm = () => {
    const [error, setError] = useState(null);
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');
    const [cardImage, setCardImage] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const navigate=useNavigate()
    const handleCardNumberChange = (event) => {
        if (event.complete) {
            const cardType = event.brand;
            if (cardType === 'visa') setCardImage('https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png');
            else if (cardType === 'mastercard') setCardImage('https://upload.wikimedia.org/wikipedia/commons/a/a1/Mastercard_logo.png');
            else if (cardType === 'american_express') setCardImage('https://upload.wikimedia.org/wikipedia/commons/a/a4/American_Express_logo.png');
            else setCardImage('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;
        const cardNumber = elements.getElement(CardNumberElement);
        const cardExpiry = elements.getElement(CardExpiryElement);
        const cardCvc = elements.getElement(CardCvcElement);
        const { token, error } = await stripe.createToken(cardNumber);
        console.log('tokenid : ' + token.id)
        if (error) {
            setError(error.message);
        } else {
            const data = {
                paymentDto: {
                    token: token.id.trim(),
                    amount: 100
                }
            };
            apiInstance.post('Payment/payment', data, {
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    navigate('/paymentsucceed')
                    console.log('Success:', response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (!stripe || !elements) return;

    //     const cardNumber = elements.getElement(CardNumberElement);

    //     const { token, error: stripeError } = await stripe.createToken(cardNumber);

    //     if (stripeError) {
    //         setError(stripeError.message);
    //         return;
    //     }

    //     const data = {
    //         token: token.id,
    //         amount: 1000, // Replace with the actual amount in cents
    //     };

    //     try {
    //         const response = await apiInstance.post('Payment/payment', data, {
    //             headers: {
    //                 'accept': '*/*',
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //         console.log('Success:', response.data);
    //         console.log('dskvjbsdkj'+token.id)
    //     } catch (error) {
    //         console.error('Error:', error);
    //         if (error.response) {
    //             // Server responded with a status code outside the 2xx range
    //             setError(`Payment failed: ${error.response.data.Message || 'Please try again later.'}`);
    //         } else if (error.request) {
    //             // The request was made but no response was received
    //             setError('No response from the server. Please check your connection.');
    //         } else {
    //             // Something happened in setting up the request
    //             setError('An unexpected error occurred. Please try again.');
    //         }
    //     }
    // };
    return (
        <form onSubmit={handleSubmit} className="max-w-sm my-[20px] mx-auto p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-lg">
            <h2 className="text-center text-xl font-semibold mb-6">Payment</h2>

            <div className="mb-4 relative">
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
                <CardNumberElement className="p-3 border border-gray-300 rounded-md shadow-sm" onChange={handleCardNumberChange} />
                <img className='absolute top-[30px] right-[10px] h-[20px]' src="../img/card.png" alt="" />
                <img className='absolute top-[30px] right-[35px] h-[20px]' src="../img/visa.png" alt="" />
                <img className='absolute top-[30px] right-[60px] h-[20px]' src="../img/card3.png" alt="" />

            </div>



            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <CardExpiryElement className="p-3 border border-gray-300 rounded-md shadow-sm" />
                </div>

                <div className='relative'>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                    <CardCvcElement className="p-3 border border-gray-300 rounded-md shadow-sm" />
                    <img className='absolute top-[35px] right-[10px] h-2' src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="" />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="p-3 border border-gray-300 rounded-md shadow-sm w-full"
                >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="IN">India</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="IT">Italy</option>
                    <option value="ES">Spain</option>
                    <option value="BR">Brazil</option>
                    <option value="ZA">South Africa</option>
                    <option value="MX">Mexico</option>
                    <option value="RU">Russia</option>
                    <option value="CN">China</option>
                    <option value="JP">Japan</option>
                    <option value="KR">South Korea</option>
                    <option value="TR">Turkey</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="NG">Nigeria</option>
                    <option value="EG">Egypt</option>
                    <option value="PK">Pakistan</option>
                    <option value="AZN">Azerbaijan</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
                <input
                    type="text"
                    id="zip"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="p-3 border border-gray-300 rounded-md shadow-sm w-full"
                />
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
