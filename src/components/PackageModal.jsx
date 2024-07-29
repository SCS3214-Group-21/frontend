import { React, useState } from 'react';
import PrimaryNoneFillButton from './ui/PrimaryNoneFillButton';
import SecondaryNoneFillButton from './ui/SecondaryNoneFillButton';
import FavoriteButton from './ui/FavoriteButton';
import BooknowPopup from './BooknowPopup';
import GetQuotationPopup from './GetQuotationPopup';

function PackageModal({ selectedPackage, packageItems, closeModal, downloadPDF, vendorName, vendorType }) {
    const [isBookNowOpen, setIsBookNowOpen] = useState(false);
    const [isQuotationOpen, setIsQuotationOpen] = useState(false);

    const openBookNow = () => setIsBookNowOpen(true);
    const closeBookNow = () => setIsBookNowOpen(false);

    const openQuotation = () => setIsQuotationOpen(true);
    const closeQuotation = () => setIsQuotationOpen(false);

    return (
        <div className="modal" role="dialog" id="popup">
            <div className="modal-box bg-[#f9e9e3] text-black relative">
                <button
                    className="absolute btn btn-sm btn-circle btn-ghost right-12 top-2"
                    onClick={downloadPDF}
                >
                    <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
                    </svg>
                </button>
                <button
                    className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                    onClick={closeModal}
                >
                    ✕
                </button>
                <div className="flex items-center mb-4">
                    <h3 className="text-lg font-bold">{selectedPackage.name}</h3>
                    <div className="ml-5">
                        <FavoriteButton />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 py-4 form-control">
                    {packageItems[selectedPackage.value]?.map((item, index) => (
                        <label key={index} className="cursor-pointer label">
                            <span className="text-black label-text"> {item.label}</span>
                            <input
                                type="checkbox"
                                defaultChecked
                                className="checkbox border-[#A57E17] [--chkbg:#A57E17] [--chkfg:white] checked:border-[#A57E17]"
                            />
                        </label>
                    ))}
                </div>
                {selectedPackage.additional && (
                    <div className="relative mt-4">
                        <div className="absolute -top-3 left-3 bg-[#f9e9e3] px-1">
                            <span className="text-sm text-gray-700">Description</span>
                        </div>
                        <p className="w-full border-black bg-[#f9e9e3] border mt-5 p-2">
                            {selectedPackage.additional}
                        </p>
                    </div>
                )}
                <div className='my-4 text-xl font-bold text-center'>
                    {selectedPackage.price} <span className='text-sm font-semibold'>per person</span>
                </div>
                <div className='flex mt-4'>
                    <div onClick={openQuotation}>
                        <PrimaryNoneFillButton text="Get Quotation" /></div>
                    <div className="absolute mb-4 right-4 bottom" onClick={openBookNow}>
                        <SecondaryNoneFillButton text="Book Now!" />
                    </div>
                </div>
            </div>
            {/* BooknowPopup Conditional Rendering */}
            {isBookNowOpen && <BooknowPopup name={vendorName} type={vendorType} pkg={selectedPackage} closePopup={closeBookNow} />}
            {isQuotationOpen && <GetQuotationPopup closePopup={closeQuotation} pkg={selectedPackage} pkgItems={packageItems} />}

        </div>
    )
}

export default PackageModal;
