import React from "react";
import RegisterHeader from "../../components/common/RegisterHeader.jsx";
import ClientSidebar from "../../components/ClientSidebar.jsx";
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import AddCard from '../../components/common/AddCard.jsx';
import PlanBudgetForm from "../../components/PlanBudgetForm.jsx";

function PlanBudgetPage() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/mywedding' },
        { label: 'Budget', href: '/budget' },
        { label: 'Plan Budget' },
    ];
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
                        <h1 className='text-4xl font-bold text-custom-primary'>Plan Budget</h1>
                    </div>
                    <div className="pb-5">
                        <PlanBudgetForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanBudgetPage