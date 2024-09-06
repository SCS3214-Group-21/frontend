import React from "react";
import CommentSection from "../../components_depr/common/CommentSection.jsx"
import RegisterHeader from "../../components_depr/common/RegisterHeader.jsx";
import ClientSidebar from "../../components_depr/ClientSidebar.jsx";
import Breadcrumb from "../../components_depr/ui/Breadcrumb.jsx";

function ViewMyBlogPage() {
    const breadcrumbItems = [
        { label: 'My Wedding', href: '/' },
        { label: 'Vendors', href: '/' },
        { label: 'Hotels' },
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
                        <h1 className='text-4xl font-bold text-custom-primary'>Love in Full Blooms</h1>
                    </div>
                    <div className="pb-5">
                        <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-col'>
                            <h1 className='text-2xl font-semibold text-center text-black'>Love in Full Blooms - Navigating the Delicate Petals of Romance</h1>
                            <div className="flex flex-row items-end justify-end gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1 text-black rounded-full size-6 hover:bg-custom-secondary hover:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1 text-red-700 rounded-full size-6 hover:bg-red-700 hover:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                            <div className="flex items-center justify-center p-5">
                                <img src="../src/assets/images/Images/blog1.png" alt="blog" className="w-full h-full sm:w-3/4 sm:h-3/4" />
                            </div>
                            <div>
                                <p className="p-5 text-justify text-black"> On October 22, 2020, Neville arrived at a house gathering, and Chelsie opened the door for him. Instantly he thought, “Man, this girl’s beautiful. She’s amazing.” They talked a little at the gathering, but nothing came of it that night. A few days later, Neville reached out to Chelsie, and they got the chance to bond over their love for music and sports. It felt like they had known each other forever. After about a month, they were officially a couple. A year and a half later, Neville asked Chelsie to become his wife. This fun-loving couple tied the knot in an elegant, black-and-white wedding ceremony, followed by a reception that went viral! See all of the details of this wedding featured in the spring 2024 issue of Black Bride Magazine, and captured by Jamaal McKenzie and Paul McFall IV of Capital Films DC.
                                </p>
                            </div>
                            <div className="px-5 text-black">
                                <h2 className="font-semibold">Bride : <span className="font-normal">Chelsie Gallimore</span></h2>
                                <h2 className="font-semibold">Groom : <span className="font-normal">Neville Gallimore</span></h2>
                                <h2 className="font-semibold">Wedding Date : <span className="font-normal">March 11, 2023</span></h2>
                                <h2 className="font-semibold">Wedding Location : <span className="font-normal">Bellevue Conference and Event Center, Chantilly, Virginia</span></h2>
                                <h2 className="font-semibold">Wedding Theme : <span className="font-normal">Black and White Elegance</span></h2>
                            </div>
                            <div className="p-5 text-black">
                                <h1 className="font-semibold">Briefly tell us about your wedding experience and how the both of you felt on your big day.</h1>
                                <p className="text-justify">From the ceremony to the reception, everything went according to plan. With the bride being from DC and the groom having Jamaican roots, we wanted to incorporate both of our cultures. Our DJ Chris from CeeKay Soundz had us and all of our guests on the floor ALL NIGHT with the most popular Go Go and Caribbean tunes. Wedding planner T’Kiyah from TKO Total Events had the bright idea of having a Carnival style performance to highlight Neville’s Caribbean culture. We surprised our guests with a performance from Soka Tribe that included live costumed dancers, Moko Jumbies (stilt walkers), congas drummers, and more! When Chelsie changed into her reception jumpsuit by Albina Dyla she was reintroduced and danced her way back into the reception to “One Leg Up” by Pure Elegance, which has since gone viral on TikTok and Instagram. </p>
                            </div>
                            <div className="p-5 text-black">
                                <h1 className="font-semibold">What are you most looking forward to as a married couple?</h1>
                                <p className="text-justify">We are looking forward to growing together as a couple and cherishing the memories that we make. </p>
                            </div>
                            <h2 className="p-5 font-semibold text-black">Published By : <span className="font-normal">Admin</span></h2>
                            <CommentSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMyBlogPage;