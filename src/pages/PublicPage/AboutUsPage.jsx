import React from 'react';
import LoginHeader from '../../components/common/LoginHeader';
import Aboutus from "../../assets/images/Images/about.png";

function AboutUsPage() {
    return (
        <div className="bg-[#FFF8F5] min-h-screen flex flex-col">
            {/* Header */}
            <LoginHeader />

            {/* About Us Section */}
            <section className="flex flex-col items-center justify-center flex-1 w-full px-6 py-6 sm:px-12 lg:px-24">


                {/* Mission and Values Section */}
                <div className="flex flex-col items-center justify-between w-full max-w-6xl space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
                    {/* Left side - Text */}

                    <div className="space-y-4 text-left lg:w-1/2">
                        <div className="mb-6 ">
                            <h1 className="mb-2 font-mono text-6xl font-bold text-custom-primary ">About Us</h1>
                            <p className="max-w-2xl mx-auto text-base text-gray-600 sm:text-lg">
                                We are a passionate team dedicated to making your dream wedding come true.
                                Our mission is to provide exceptional services, making every wedding a unique and memorable experience.
                            </p>
                        </div>
                        <h2 className="text-2xl font-semibold text-custom-secondary sm:text-3xl">Our Mission</h2>
                        <p className="text-sm text-gray-600 sm:text-base">
                            Our mission is to bring your wedding dreams to life by offering top-notch services tailored to your unique preferences.
                            We aim to create an unforgettable experience for couples by delivering extraordinary quality in every aspect of the wedding journey.
                        </p>
                        <h2 className="text-2xl font-semibold text-custom-secondary sm:text-3xl">Our Values</h2>
                        <p className="text-sm text-gray-600 sm:text-base">
                            We believe in excellence, creativity, and customer satisfaction. Every wedding we plan is crafted with love,
                            and we strive to exceed expectations, making your big day as magical as possible.
                        </p>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center lg:w-1/2">
                        <img src={Aboutus} alt="Our Mission" className="object-cover h-auto w-80 lg:w-full" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUsPage;
