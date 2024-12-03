// import React, { useState, useEffect } from "react";
// import RegisterHeader from "../../components/common/RegisterHeader.jsx";
// import VendorSidebar from "../../components/vendor/VendorSidebar.jsx";
// import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
// import { loadStripe } from '@stripe/stripe-js'; // For Stripe Checkout
// import SubscriptionInfo from "../../components/vendor/SubscriptionInfo.jsx";
// import SubscriptionForm from "../../components/vendor/SubscriptionForm.jsx";

// const stripePromise = loadStripe('your_stripe_public_key'); // Replace with your actual Stripe public key

// function SubscriptionPage() {
//     const [subscription, setSubscription] = useState(null);

//     const breadcrumbItems = [
//         { label: 'Dashboard', href: '/vendor/dashboard' },
//         { label: 'Subscription', href: '/vendor/subscription' },
//         { label: 'Manage Subscription' },
//     ];

//     // Fetch subscription info when the component mounts
//     useEffect(() => {
//         const fetchSubscription = async () => {
//             // Call your API to get the vendor's current subscription status
//             const response = await fetch('/subscription/status');
//             const data = await response.json();
//             setSubscription(data.subscription);
//         };

//         fetchSubscription();
//     }, []);

//     return (
//         <div>
//             <RegisterHeader />
//             <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
//                 <div className="w-[5%] sm:w-[10%] md:w-[20%]">
//                     <VendorSidebar />
//                 </div>
//                 <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-2 md:pl-32 xl:pl-5 xl:pr-16">
//                     <div className="pb-5">
//                         <Breadcrumb items={breadcrumbItems} />
//                     </div>
//                     <div className="pb-5">
//                         <h1 className='text-4xl font-bold text-custom-primary'>Manage Subscription</h1>
//                     </div>
                    
//                     {/* Subscription Info Section */}
//                     <div className="pb-5">
//                         <SubscriptionInfo subscription={subscription} />
//                     </div>
                    
//                     {/* Subscription Form for Payment */}
//                     <div className="pb-5">
//                         {subscription && subscription.status === 'inactive' ? (
//                             <SubscriptionForm stripePromise={stripePromise} />
//                         ) : (
//                             <div className="text-xl text-red-600">
//                                 You already have an active subscription.
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SubscriptionPage;

import React, { useState } from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import VendorSidebar from "../../components/vendor/VendorSidebar.jsx";
import Breadcrumb from "../../components/ui/Breadcrumb.jsx";

function SubscriptionPage() {
    const breadcrumbItems = [
        { label: "Dashboard", href: "/vendor/dashboard" },
       
        { label: "Subscription" },
    ];

    // Mock subscription data
    const [subscription] = useState({
        status: "inactive", // Change to "active" to test the other state
        plan: "Monthly Subscription",
        price: "$5.00",
        start_date: "2024-12-01",
        end_date: "2025-01-01",
    });

    return (
        <div>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <VendorSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-2 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className="text-4xl font-bold text-custom-primary">
                            Subscription
                        </h1>
                    </div>

                    {/* Subscription Info Section */}
                    <div className="pb-5">
                        <div className="p-5 bg-white rounded shadow">
                            <h2 className="mb-3 text-2xl font-semibold">
                                Current Subscription
                            </h2>
                            {subscription.status === "active" ? (
                                <div>
                                    <p>Plan: {subscription.plan}</p>
                                    <p>Price: {subscription.price}</p>
                                    <p>
                                        Start Date:{" "}
                                        {new Date(subscription.start_date).toLocaleDateString()}
                                    </p>
                                    <p>
                                        End Date:{" "}
                                        {new Date(subscription.end_date).toLocaleDateString()}
                                    </p>
                                </div>
                            ) : (
                                <p className="text-red-600">
                                    You currently do not have an active subscription.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Subscription Payment Form Section */}
                    <div className="pb-5">
                        {subscription.status === "inactive" && (
                            <div className="p-5 bg-white rounded shadow">
                                <h2 className="mb-3 text-2xl font-semibold">Subscribe Now</h2>
                                <p className="mb-4">Choose your subscription plan to activate:</p>
                                <button className="px-5 py-2 text-white bg-blue-500 rounded">
                                    Subscribe for $5.00/month
                                </button>
                            </div>
                        )}
                        {subscription.status === "active" && (
                            <div className="p-5 bg-green-100 rounded shadow">
                                <p>You already have an active subscription.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionPage;

