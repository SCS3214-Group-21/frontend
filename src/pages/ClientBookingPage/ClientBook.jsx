import React from "react";
import RegisterHeader from "../../components/common/RegisterHeader";
import ClientSidebar from "../../components/ClientSidebar";
import Breadcrumb from "../../components/ui/Breadcrumb";
import WhiteCard from "../../components/WhiteCard";
import Chatbox2 from "../../components/common/Chatbox2";

function ClientBook() {
  const breadcrumbItems = [
    { label: "My Wedding", href: "/" },
    { label: "Bookings" },
  ];
  return (
    <div className="bg-[#FFF8F5] min-h-screen flex flex-col">
      <RegisterHeader />
      <div className="flex flex-1">
        <ClientSidebar />
        <div className="flex flex-col flex-1 ">
          <div className="flex flex-col ml-0 md:ml-20 lg:ml-80">
            <div>
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-custom-primary">
                Booking
              </h1>
            </div>
          </div>
          <div className="flex flex-col flex-1 p-4 mt-5 mr-10 lg:mr-35 bg-white border-b-4 border-[#FFDBC8] rounded-lg shadow-md relative overflow-hidden ml-8 md:ml-24 lg:ml-80 mb-6 space-y-0">
            <Chatbox2
              Name="Vendor1"
              Status="Sent"
              Message="Accept"
              Time="12:34"
              Path="/chat2"
              buttontext="View Details"
            />
            <Chatbox2
              Name="Vendor2"
              Status="Delivered"
              Message="Accept"
              Time="10:20"
              Path="/chat2"
              buttontext="View Details"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientBook;
