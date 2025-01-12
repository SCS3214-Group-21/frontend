// components/vendor/SubscriptionInfo.jsx

import React from 'react';

function SubscriptionInfo({ subscription }) {
    if (!subscription) {
        return <div>Loading subscription details...</div>;
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Current Subscription</h2>
            <div className="flex flex-col">
                <div className="mb-2">
                    <span className="font-bold">Status:</span>
                    <span className={subscription.status === 'active' ? 'text-green-600' : 'text-red-600'}>
                        {subscription.status}
                    </span>
                </div>
                <div className="mb-2">
                    <span className="font-bold">Start Date:</span>
                    <span>{new Date(subscription.start_date).toLocaleDateString()}</span>
                </div>
                <div className="mb-2">
                    <span className="font-bold">End Date:</span>
                    <span>{subscription.end_date ? new Date(subscription.end_date).toLocaleDateString() : 'N/A'}</span>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionInfo;
