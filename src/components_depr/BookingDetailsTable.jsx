import React from 'react'

function BookingDetailsTable(props) {

    const { vendorname, vendortype, packagename, bookingdate, price, guestcount, totalamount } = props
    return (
        <>

            <div className="flex flex-col w-full gap-2 mt-4 mb-10 text-black border-2 rounded-md border-custom-secondary">
                <div className="flex flex-row bg-gray-300 rounded-r-md">
                    <div className="w-full p-1 text-xl font-semibold text-center border-b-2">
                        Vendor: {vendorname}
                    </div>
                </div>
                <div className="flex flex-row border-b ">
                    <div className="w-1/2 p-2 font-semibold border-r">
                        Type
                    </div>
                    <div className="w-1/2 p-2 ">
                        {vendortype}
                    </div>
                </div>
                <div className="flex flex-row border-b ">
                    <div className="w-1/2 p-2 font-semibold border-r">
                        Package Name
                    </div>
                    <div className="w-1/2 p-2">
                        {packagename}
                    </div>
                </div>
                <div className="flex flex-row border-b ">
                    <div className="w-1/2 p-2 font-semibold border-r">
                        Booking Date
                    </div>
                    <div className="w-1/2 p-2 ">
                        {bookingdate}
                    </div>
                </div>
                <div className="flex flex-row border-b ">
                    <div className="w-1/2 p-2 font-semibold border-r">
                        Price(Rs.)
                    </div>
                    <div className="w-1/2 p-2">
                        {price}
                    </div>
                </div>
                <div className="flex flex-row border-b ">
                    <div className="w-1/2 p-2 font-semibold border-r">
                        Participants
                    </div>
                    <div className="w-1/2 p-2">
                        {guestcount}
                    </div>
                </div>
                <div className="flex flex-row ">
                    <div className="w-1/2 p-2 font-semibold border-r">
                        Total Amount
                    </div>
                    <div className="w-1/2 p-2 font-bold">
                        {/*price * guestcount*/}
                        {totalamount}
                    </div>
                </div>

            </div>

        </>
    )
}

export default BookingDetailsTable
