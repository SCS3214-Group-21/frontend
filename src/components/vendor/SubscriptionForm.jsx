// components/vendor/SubscriptionForm.jsx

import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

function SubscriptionForm({ stripePromise }) {
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        
        setLoading(true);

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setLoading(false);
            alert(error.message);
            return;
        }

        // Call your backend to create a Stripe subscription with paymentMethod.id
        const response = await fetch('/subscription/create-subscription', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,
                 Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ payment_method: paymentMethod.id }),
        });

        const data = await response.json();

        if (data.success) {
            alert('Subscription successful!');
        } else {
            alert('Subscription failed. Please try again.');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Enter Payment Details</h2>
            <div className="mb-4">
                <CardElement />
            </div>
            <button
                type="submit"
                className="w-full py-2 text-white rounded-lg bg-custom-primary"
                disabled={loading}
            >
                {loading ? 'Processing...' : 'Subscribe Now'}
            </button>
        </form>
    );
}

export default SubscriptionForm;
