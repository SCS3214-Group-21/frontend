import React from "react";
import Breadcrumb from "../../components/ui/Breadcrumb.jsx";
import AdminSidebar from "../../components/AdminSidebar.jsx";
import AdminHeader from "../../components/common/AdminHeader.jsx";
import SecondaryButton from "../../components/ui/SecondaryButton.jsx";
import DeleteButton from "../../components/ui/DeleteButton.jsx";

function AdminManageUserPage() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/admindashboard" },
    { label: "Feedback" },
  ];

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
            <h1 className="text-4xl font-bold text-custom-primary">Users</h1>
          </div>
            {/* //dropdown */}
          <div className="pb-2">
            <div className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-2 p-4 flex flex-row gap-10 sm:gap-5 flex-wrap">
                <div className="w-1/4 ml-auto flex items-center gap-2">
                    <label className="text-lg font-semibold whitespace-nowrap">Select Type :</label>
                    <select
                        className="w-full border border-[#FFDBC8] rounded-lg px-2 py-1 bg-[#FFF8F5] text-black"
                        name="userType"
                    >
                        <option value="vendor">Feedbacks</option>
                        <option value="customer">Complaints</option>
                    </select>
                    </div>
                
            </div>
            </div>
          <div className="pb-5">
            <div className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row gap-10 sm:gap-5 flex-wrap">
                
              <table className="w-full border-collapse  rounded-xl flex-wrap text-black ">
                <thead>
                  <tr className="text-black">
                    <th className="px-4 py-2 border-b">User ID</th>
                    <th className="px-4 py-2 border-b">User name</th>
                    <th className="px-4 py-2 border-b">User Type</th>
                    <th className="px-8 py-2 border-b">Subject</th>
                    <th className="px-4 py-2 border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Replace this with dynamic rows from your data */}
                  <tr className="text-center">
                    <td className="px-4 py-2 border-b ">1</td>
                    <td className="px-4 py-2 border-b">Lakshani</td>
                    <td className="px-4 py-2 border-b">Vendor</td>
                    <td className="px-8 py-2 border-b">Regarding a vendor in the system</td>
                    <td className=" px-4 py-2 space-x-2 border-b ml-10 flex items- gap-2">
                      <SecondaryButton  link="./manageUserPopup" text="View" />
                      <SecondaryButton  link="/deleteUser/1" text="Resolve" />
                      <button onClick={() => alert("View blog details")}>
                        {/* <FaEye className="text-blue-500" /> */}
                      </button>
                      <button onClick={() => handleAccept(1)}>
                        {/* <FaCheck className="text-green-500" /> */}
                      </button>
                      <button onClick={() => handleReject(1)}>
                        {/* <FaTimes className="text-red-500" /> */}
                      </button>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminManageUserPage;
