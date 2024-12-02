import React, { useState } from 'react';
import { createQuotation } from '../../services/quotationServices.js'
import SecondaryButton from '../ui/SecondaryButton'
import CheckboxField from '../ui/CheckboxField'
import InputField2 from '../ui/InputField2'

function GetQuotationPopup({ closePopup, pkgId, pkgItems, vendor_id }) {
    const [selectedItems, setSelectedItems] = useState(JSON.parse(pkgItems));
    const [details, setDetails] = useState('');

    const toggleItem = (item) => {
        setSelectedItems((prevItems) =>
            prevItems.includes(item)
                ? prevItems.filter((i) => i !== item)
                : [...prevItems, item]
        );
    };

    const handleSubmit = async () => {
        try {
            const client_id = localStorage.getItem('id'); // Replace with actual client ID
            const package_id = pkgId;
            //console.log("Package id is", pkgId);

            await createQuotation(client_id, vendor_id, selectedItems, details, package_id);

            alert('Quotation requested successfully!');
            closePopup();
        } catch (error) {
            console.error('Error requesting quotation:', error.message);
            alert('Failed to request quotation. Please try again.');
        }
    };

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative flex flex-col w-11/12 text-black bg-white md:w-2/3 lg:w-1/3 rounded-xl border border-[#FFDBC8] border-b-8 pb-5'>
                <button
                    className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                    onClick={closePopup}
                >
                    ✕
                </button>

                <h2 className='w-full mt-5 text-4xl font-bold text-center'>Request Quotation</h2>
                <div className="grid grid-cols-2 gap-2 px-8 py-8 form-control">
                    {JSON.parse(pkgItems).map((item, index) => (
                        <label key={index} className="cursor-pointer label">
                            <span className="text-black label-text">{item}</span>
                            <input
                                type="checkbox"
                                checked={selectedItems.includes(item)}
                                onChange={() => toggleItem(item)}
                                className="checkbox border-[#A57E17] [--chkbg:#A57E17] [--chkfg:white] checked:border-[#A57E17]"
                            />
                        </label>
                    ))}
                </div>
                <div className='px-8 py-4'>
                    <InputField2
                        id={1}
                        type="text"
                        name="Additional Details"
                        placeholder="..."
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </div>
                <div className='flex flex-col items-center w-full mt-10'>
                    <div className='mt-6 mb-4'>
                        <button
                            className="border-0 rounded-full px-8 h-10 bg-custom-secondary text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:from-custom-gray hover:via-custom-gray hover:to-custom-gray hover:text-custom-primary hover:border-2 hover:border-custom-primary"
                            onClick={handleSubmit}
                        >
                            Request Quotation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetQuotationPopup;
