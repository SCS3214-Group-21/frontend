import React, { useState } from 'react';
import LandingHeader from '../../components/common/LandingHeader.jsx';
import StatusCard from '../../components/common/StatusCard.jsx';
import ServicesCarousel from '../../components/landing/ServicesCarousel.jsx';
import PartnerBadges from '../../components/common/PartnerBadges.jsx';
import ReviewCarousel from '../../components/landing/ReviewCarousel.jsx';
import LandingFooter from '../../components/common/LandingFooter.jsx';
import CustomPinkButton from '../../components/ui/CustomPinkButton.jsx';
import ContactUsForm from '../../components/landing/ContactUsForm.jsx';
function LandingPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            <LandingHeader onRegisterClick={openPopup} />

            {/* Hero section */}
            <section
                className="bg-[#FFF8F5] h-screen w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/landing/p1.png')" }}
            >
                <div className='absolute text-left bottom-10 left-6'>
                    <StatusCard
                        title={"Discover, Plan,"}
                        subtitle={"Celebrate"}
                        paragraph={"From finding the perfect venue to choosing the right vendors, our platform makes wedding planning a breeze. Start your journey with us and create unforgettable memories."}
                        button={"Get Started"}
                        link={"/login"}
                    />
                </div>
            </section>

            {/* Couples section */}
            <section
                className="bg-[#FFF8F5] h-screen w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/landing/p2.png')" }}
            >
                <div className='absolute text-right bottom-10 right-6'>
                    <StatusCard
                        title={"For"}
                        subtitle={"Couples"}
                        paragraph={"Create your free account today and start exploring top-notch services to bring your vision to life."}
                        button={"Register"}
                        link={"/register"}
                    />
                </div>
            </section>

            {/* Services section */}
            <section id="services-section"
                className="bg-[#FFF8F5] min-h-screen w-full flex flex-col items-center pt-20"
            >
                <h1 className="pb-10 font-sans text-4xl font-normal text-center text-custom-primary sm:text-5xl">
                    Services <span className="text-black">you may find here </span>
                </h1>
                <ServicesCarousel />
                <h1 className="pt-20 pb-10 font-sans text-4xl font-normal text-center text-black sm:text-5xl">
                    Our Partners
                </h1>
                <PartnerBadges />
            </section>

            {/* Vendors section */}
            <section
                className="bg-[#FFF8F5] h-screen w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/landing/p3.png')" }}
            >
                <div className='absolute text-left bottom-10 left-6'>
                    <StatusCard
                        title={"For"}
                        subtitle={"Service Provider"}
                        paragraph={"Register now and showcase your talents to thousands of couples. No fees until your first booking!"}
                        button={"Register"}
                        link={"/vendorregister"}
                    />
                </div>
            </section>

            {/* Reviews section */}
            <section
                className="bg-[#FFF8F5] min-h-screen w-full flex flex-col items-center pt-20 pb-5"
                style={{ backgroundImage: "url('./src/assets/images/landing/p4.png')" }}
            >
                <h1 className="pb-10 font-sans text-4xl font-normal text-center text-black sm:text-5xl">
                    Community Reviews
                </h1>
                <ReviewCarousel />
                <div className='flex flex-col items-center justify-center gap-10 p-10 mt-20 bg-white sm:flex-row bg-opacity-80 rounded-xl'>
                    <div className='flex flex-col items-center justify-center w-1/2 gap-4'>
                        <h4 className="font-sans text-lg font-normal text-center text-black sm:text-xl">Never miss an update. Sign up now</h4>
                        <h1 className="font-sans text-3xl font-normal text-center text-black sm:text-4xl">Our Newsletter is worth something</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/2 gap-4'>
                        <input
                            type="email"
                            placeholder="email"
                            className="w-full bg-white input input-bordered"
                        />
                        <CustomPinkButton
                            text={"Subscribe"}
                            link={"/"}
                        />
                    </div>
                </div>
            </section>

            {/* Boosting section */}
            <section
                className="bg-[#FFF8F5] h-screen w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/landing/p5.png')" }}
            >
                <div className='absolute text-left bottom-10 left-6'>
                    <StatusCard
                        title={"Business not going as Planned Need a"}
                        subtitle={"Boost..?"}
                        paragraph={"Get Idea about our boosting service, ideally make for improving your business"}
                        button2={"Details"}
                        link2={"/"}
                    />
                </div>
            </section>

            {/* Blogging section */}
            <section
                className="bg-[#FFF8F5] h-screen w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/landing/p6.png')" }}
            >
                <div className='absolute text-right bottom-10 right-6'>
                    <StatusCard
                        title={"Planning a Wedding Don’t have any"}
                        subtitle={"idea..?"}
                        paragraph={"Read our excellent blogs and get idea about every simple steps easily. No Fee, Totally Free"}
                    // button2={"Details"}
                    // link2={"/"}
                    />
                </div>
            </section>

            {/* Feedback section */}
            <section
                className="bg-[#FFF8F5] h-screen w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/landing/p7.png')" }}
            >
                <div className='absolute text-left bottom-10 left-6'>
                    <StatusCard
                        title={"Feedback"}
                        paragraph={"We value your thoughts! Share your thought with us... "}
                        button3={"Contact Us"}
                        link3={"/"}
                    />
                </div>
            </section>

            {/* Bottom section */}
            <section
                className="bg-[#FFF8F5] h-screen w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/landing/p8.png')" }}
            >
                <LandingFooter />
            </section>
            {isPopupOpen && <ContactUsForm onClose={closePopup} />}
        </div>
    );
}

export default LandingPage;