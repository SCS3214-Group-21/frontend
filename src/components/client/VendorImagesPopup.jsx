import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import SecondaryNoneFillButton from '../ui/SecondaryNoneFillButton'
import Pagination from '../common/Pagination'

function VendorImagesPopup({ images }) {
    let [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    // Function to render images
    const renderImages = (currentItems) => (
        <div className="grid grid-cols-2 gap-2">
            {currentItems.map((image, index) => (
                <div key={index} className="relative overflow-hidden group">
                    <img className="h-auto max-w-full transition-transform duration-300 transform rounded-lg group-hover:scale-150" src={`http://localhost:5000/uploads/vendor/images/${image}`} alt="" />
                </div>
            ))}
        </div>
    );

    return (
        <>
            <div onClick={handleClick}>
                <SecondaryNoneFillButton text="Photo Gallery" />
            </div>

            <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
                <div className="fixed inset-0 w-screen p-4 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full">
                        <DialogPanel className="max-w-lg p-12 space-y-4 bg-[#F0DFD7] border-4 border-[#A57E17] text-blackborder relative">
                            <div className="flex items-center justify-between">
                                <DialogTitle className="font-bold text-black">Gallery</DialogTitle>
                                <button
                                    className="ml-auto btn btn-sm btn-circle btn-ghost"
                                    onClick={closeModal}
                                >
                                    ✕
                                </button>
                            </div>
                            <Description>
                                <Pagination
                                    items={images}
                                    itemsPerPage={4}
                                    renderItems={renderImages}
                                />
                            </Description>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default VendorImagesPopup;
