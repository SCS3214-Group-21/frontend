import React, { useState } from "react";
import Breadcrumb from "../../components/ui/Breadcrumb.jsx";
import AddCard from "../../components/common/AddCard.jsx";
import SubscriptionCard from "../../components/common/SubscriptionCard.jsx";
import Pagination from "../../components/common/Pagination.jsx";
import AdminHeader from "../../components/common/AdminHeader.jsx";
import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import PrimaryNoneFillButton from "../../components/ui/PrimaryNoneFillButton.jsx";

// Sample subscription plans
const subscriptionPlans = [
  { name: "Basic Plan", price: "$10/month", features: ["Feature 1", "Feature 2"], id: 1 },
  { name: "Standard Plan", price: "$20/month", features: ["Feature 1", "Feature 2", "Feature 3"], id: 2 },
  { name: "Premium Plan", price: "$50/month", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"], id: 3 },
  { name: "Enterprise Plan", price: "$100/month", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"], id: 4 },
  // Add more plans to increase data for pagination
];

const renderItems = (currentItems, onDelete) => (
  <div className="flex flex-row flex-wrap items-center justify-center gap-6">
    <div className="flex items-center justify-center p-2 bg-white h-72 w-60">
      <AddCard text={"Add Plan"} link={"/admin/subscriptions/addplan"} />
    </div>
    {currentItems.map((item) => (
      <div key={item.id} className="flex items-center justify-center p-2 bg-white h-72 w-60">
        <SubscriptionCard
          name={item.name}
          price={item.price}
          features={item.features}
          onDelete={() => onDelete(item.id)}
          onEdit={() => alert(`Editing ${item.name}`)}
        />
      </div>
    ))}
  </div>
);

function AdminSubscriptionPage() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/admindashboard" },
    { label: "Subscriptions" },
  ];

  const [subscriptions, setSubscriptions] = useState(subscriptionPlans);

  const handleDelete = (id) => {
    const updatedSubscriptions = subscriptions.filter((plan) => plan.id !== id);
    setSubscriptions(updatedSubscriptions);
  };

  return (
    <div>
      <AdminHeader />
      <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
        <div className="w-[5%] sm:w-[10%] md:w-[20%]">
          <AdminSidebar />
        </div>
        <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
          <div className="pb-5">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="flex justify-between pb-5">
            <h1 className="text-4xl font-bold text-custom-primary">Subscriptions</h1>
            <div className="absolute flex flex-row p-4 mb-2 right-7">
              <PrimaryNoneFillButton text="View Subscribers" link="/subscribers" />
            </div>
          </div>
          <div className="pb-5">
            <div className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap">
              <Pagination
                items={subscriptions}
                itemsPerPage={4}
                renderItems={(currentItems) => renderItems(currentItems, handleDelete)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSubscriptionPage;
