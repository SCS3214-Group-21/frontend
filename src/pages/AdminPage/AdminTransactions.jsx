import React, { useState } from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb.jsx';
import AdminSidebar from '../../components/AdminSidebar.jsx';
import AdminHeader from '../../components/common/AdminHeader.jsx';
import SecondaryButton from '../../components/ui/SecondaryButton.jsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const transactions = [
    { id: 1, amount: 500, type: 'Credit', date: '2024-11-14', status: 'Pending', host: 'Lakshani' },
    { id: 2, amount: 1200, type: 'Debit', date: '2024-10-10', status: 'Completed', host: 'Nimesha' },
    { id: 3, amount: 750, type: 'Credit', date: '2024-08-05', status: 'Failed', host: 'Arimac' },
    { id: 4, amount: 2000, type: 'Debit', date: '2024-09-20', status: 'Pending', host: 'Colombo' },
    // Add more transactions as needed
];

function AdminTransactions() {
    const [statusFilter, setStatusFilter] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const breadcrumbItems = [
        { label: 'Dashboard', href: '/admindashboard' },
        { label: 'Manage User' },
    ];

    // Filter the transactions based on status and date range
    const filteredTransactions = transactions.filter(transaction => {
        const matchesStatus = statusFilter ? transaction.status === statusFilter : true;
        const transactionDate = new Date(transaction.date);
        const matchesStartDate = startDate ? new Date(startDate) <= transactionDate : true;
        const matchesEndDate = endDate ? transactionDate <= new Date(endDate) : true;

        return matchesStatus && matchesStartDate && matchesEndDate;
    });

    return (
        <>
            <AdminHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <AdminSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className='text-4xl font-bold text-custom-primary'>Transactions</h1>
                    </div>

                    {/* Filters */}
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-1 p-4 flex flex-row gap-4 items-center'>
                            {/* Status Filter */}
                            <div className="flex flex-col w-1/3">
                                <label className="text-lg font-semibold">Status:</label>
                                <select
                                    className="w-full border border-[#FFDBC8] rounded-lg px-2 py-1 bg-[#FFF8F5] text-black"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="">All</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Failed">Failed</option>
                                </select>
                            </div>

                            {/* Date Range Filters */}
                            <div className="flex flex-col w-1/3">
                                <label className="text-lg font-semibold">Start Date:</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    className="w-full border border-[#FFDBC8] rounded-lg px-2 py-1 bg-[#FFF8F5] text-black"
                                    placeholderText="Select start date"
                                    dateFormat="yyyy-MM-dd"
                                />
                            </div>
                            <div className="flex flex-col w-1/3">
                                <label className="text-lg font-semibold">End Date:</label>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    className="w-full border border-[#FFDBC8] rounded-lg px-2 py-1 bg-[#FFF8F5] text-black"
                                    placeholderText="Select end date"
                                    dateFormat="yyyy-MM-dd"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Transactions Table */}
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row gap-10 sm:gap-5 flex-wrap' >
                            <table className="w-full border-collapse rounded-xl flex-wrap text-black">
                                <thead>
                                    <tr className='text-black'>
                                        <th className="px-4 py-2 border-b">Transaction ID</th>
                                        <th className="px-4 py-2 border-b">Total Amount</th>
                                        <th className="px-4 py-2 border-b">Transaction Type</th>
                                        <th className="px-4 py-2 border-b">Date</th>
                                        <th className="px-4 py-2 border-b">Status</th>
                                        <th className="px-4 py-2 border-b">Host Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTransactions.length > 0 ? (
                                        filteredTransactions.map(transaction => (
                                            <tr key={transaction.id} className='text-center'>
                                                <td className="px-4 py-2 border-b">{transaction.id}</td>
                                                <td className="px-4 py-2 border-b">${transaction.amount}</td>
                                                <td className="px-4 py-2 border-b">{transaction.type}</td>
                                                <td className="px-4 py-2 border-b">{transaction.date}</td>
                                                <td className="px-4 py-2 border-b">
                                                    <SecondaryButton
                                                        text={transaction.status}
                                                    />
                                                </td>
                                                <td className="px-4 py-2 border-b">{transaction.host}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className="px-4 py-2 border-b text-center" colSpan="6">No transactions found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminTransactions;
