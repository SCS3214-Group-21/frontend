
import React, { useState } from "react";

import Breadcrumb from "../../components/ui/Breadcrumb.jsx";

import RatingCard from "../../components/common/RatingCard.jsx";

import Pagination from "../../components/common/Pagination.jsx";

import AdminHeader from "../../components/common/AdminHeader.jsx";

import AdminSidebar from "../../components/admin/AdminSidebar.jsx";

import PrimaryNoneFillButton from "../../components/ui/PrimaryNoneFillButton.jsx";

import PrimaryButton from "../../components/ui/PrimaryButton.jsx";

// Sample ratings data

const ratings = [

    { id: 1, user: "John Doe", rating: 4, comment: "Great service!", date: "2023-11-13" },

    { id: 2, user: "Jane Smith", rating: 5, comment: "Excellent experience!", date: "2023-11-14" },

    { id: 3, user: "Emily Davis", rating: 3, comment: "Good, but room for improvement.", date: "2023-11-15" },

    { id: 4, user: "Michael Brown", rating: 2, comment: "Not satisfied.", date: "2023-11-16" },

    { id: 5, user: "Sarah Wilson", rating: 5, comment: "Highly recommend!", date: "2023-11-17" },

    // Add more ratings to increase data size for pagination

];



// Render ratings for the current page


const renderItems = (currentItems, onApprove, onDelete) => (


<div className="flex flex-row flex-wrap items-center justify-center gap-6">


    {currentItems.map((rating) => (


<div key={rating.id} className="flex items-center justify-center p-2 bg-white h-auto w-80">

        <RatingCard


user={rating.user}

rating={rating.rating}

comment={rating.comment}

date={rating.date}

onApprove={() => onApprove(rating.id)}

onDelete={() => onDelete(rating.id)}

/>

      </div>

))}

  </div>

);




function AdminRatingPage() {

    const breadcrumbItems = [


        { label: "Dashboard", href: "/admindashboard" },

        { label: "Ratings" },

    ];



    const [ratingsData, setRatingsData] = useState(ratings);



    // Approve a rating


    const handleApprove = (id) => {

        alert(`Approved rating with ID: ${id}`);

    };

  // Delete a rating

  const handleDelete = (id) => {


    const updatedRatings = ratingsData.filter((rating) => rating.id !== id);

    setRatingsData(updatedRatings);

};


return (


<div>


      <AdminHeader />

      <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">

        <div className="w-[5%] sm:w-[10%] md:w-[20%]">

          <AdminSidebar />


        </div>

        <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">

          <div className="pb-5">

            <Breadcrumb items={breadcrumbItems} />


          </div>

          <div className="flex justify-between pb-5">

            <h1 className="text-4xl font-bold text-custom-primary">User Ratings</h1>

            <div className="absolute flex flex-row p-4 mb-2 right-7">

              <PrimaryNoneFillButton text="View Analytics" link="/ratings/analytics" />

            </div>

          </div>

          <div className="pb-5">

            <div className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row items-center justify-center gap-10 sm:gap-5 flex-wrap">


              <Pagination
                items={ratingsData}
                itemsPerPage={4}
                renderItems={(currentItems) => renderItems(currentItems, handleApprove, handleDelete)}
              />


            </div>

          </div>

        </div>

      </div>

    </div>

);




}





export default AdminRatingPage;
