import React from 'react'
import SecondaryButton from './ui/SecondaryButton'
import CheckboxField from './ui/CheckboxField'
import InputField2 from './ui/InputField2'

function GetQuotationPopup({ closePopup, pkg, pkgItems }) {
    return (
        <>
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
                        {pkgItems[pkg.value]?.map((item, index) => (

                            <CheckboxField id={index} label={item.label} checked={true} />

                        ))}
                    </div>
                    <div className='px-8 py-4'>
                        <InputField2 id={1}
                            type={"text"}
                            name={"Additional Details "}
                            placeholder={"..."} />
                    </div>
                    <div className='flex flex-col items-center w-full mt-10'>


                        <div className='mt-6 mb-4'>
                            <SecondaryButton text="Request Quotation" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GetQuotationPopup
