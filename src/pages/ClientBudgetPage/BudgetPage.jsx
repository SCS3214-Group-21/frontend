import React, { useEffect, useState } from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import ClientSidebar from "../../components/client/ClientSidebar.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import AddCard from '../../components/common/AddCard.jsx';
import PackageCard from '../../components/common/PackageCard.jsx';
import Pagination from '../../components/common/Pagination.jsx';
import { getAllPackages } from "../../services/budgetServices.js";

function BudgetPage() {
    const [budgets, setBudgets] = useState([]); // State to store budget data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Fetch budget data on component mount
    useEffect(() => {
        const fetchBudgets = async () => {
            try {
                const response = await getAllPackages();
                setBudgets(response.data); // Update state with fetched data
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchBudgets();
    }, []);

    // Breadcrumb items
    const breadcrumbItems = [
        { label: 'My Wedding', href: './mywedding' },
        { label: 'Budget' },
    ];

    // Render individual items in the pagination
    const renderItems = (currentItems) => (
        <div className="flex flex-row flex-wrap items-center justify-center gap-10">
            <div className="flex items-center justify-center p-2 bg-white h-60 w-52">
                <AddCard text={"Plan Budget"} link={"/client/planbudget"} />
            </div>
            {currentItems.map((budget, index) => (
                <div key={index} className="flex items-center justify-center p-2 bg-white h-60 w-52">
                    <PackageCard
                        img={"../src/assets/images/Images/hotel.png"} // Replace with relevant image logic
                        text={`Budget ${budget.plan_id}`} // Display budget info
                        button={"See more"}
                        link={`/client/viewmybudget/${budget.plan_id}`} // Dynamic link
                        showToggle1={false}
                        id={budget.plan_id}
                        initialIsEnabled={budget.status === 1} // Example: use status as an enabled toggle
                    />
                </div>
            ))}
        </div>
    );

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading budgets...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Error loading budgets: {error}</p>
            </div>
        );
    }

    return (
        <div>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <ClientSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-4xl font-bold text-custom-primary'>Budget</h1>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8'>
                            <Pagination
                                items={budgets} // Use fetched budgets
                                itemsPerPage={15} // Customize items per page
                                renderItems={renderItems} // Pass the render function
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BudgetPage;
