import React from 'react';
import LandingHeader from '../components/common/LandingHeader';
import StatusCard from '../components/common/StatusCard';
import ServicesCarousel from '../components/ServicesCarousel';
import PartnerBadges from '../components/common/PartnerBadges';
import ReviewCarousel from '../components/ReviewCarousel';
import LandingFooter from '../components/common/LandingFooter';
import CustomPinkButton from '../components/ui/CustomPinkButton';

function LandingPage(){
    return(
        <div>
            <LandingHeader />
            <div
                className="bg-[#FFF8F5] h-[60rem] w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/Images/00.png')" }}
            >
                <div className='absolute bottom-10 left-6 text-left'>
                    <StatusCard 
                        title = {"Discover, Plan,"}
                        subtitle = {"Celebrate"}
                        paragraph = {"From finding the perfect venue to choosing the right vendors, our platform makes wedding planning a breeze. Start your journey with us and create unforgettable memories."}
                        button = {"Login"}
                    />
                </div>
            </div>
            <div
                className="bg-[#FFF8F5] h-[60rem] w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/Images/000.png')" }}
            >
                <div className='absolute bottom-10 right-6 text-right'>
                    <StatusCard 
                        title = {"For"}
                        subtitle = {"Couples"}
                        paragraph = {"Create your free account today and start exploring top-notch services to bring your vision to life."}
                        button = {"Register"}
                    />
                </div>
            </div>
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-col items-center pt-20">
                <h1 className="text-custom-primary font-sans font-normal text-4xl sm:text-5xl text-center pb-10">
                    Services <span className="text-black">you may find here </span>
                </h1>
                <ServicesCarousel />
                <h1 className="text-black font-sans font-normal text-4xl sm:text-5xl text-center pt-20 pb-10">
                    Our Partners
                </h1>
                <PartnerBadges />
            </div>
            <div
                className="bg-[#FFF8F5] h-[60rem] w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/Images/001.png')" }}
            >
                <div className='absolute  bottom-10 left-6 text-left'>
                    <StatusCard 
                        title = {"For"}
                        subtitle = {"Service Provider"}
                        paragraph = {"Register now and showcase your talents to thousands of couples. No fees until your first booking!"}
                        button = {"Register"}
                    />
                </div>
            </div>
            <div
                className="bg-[#FFF8F5] min-h-screen w-full flex flex-col items-center pt-20"
                style={{ backgroundImage: "url('./src/assets/images/Images/002.png')" }}
            >
                <h1 className="text-black font-sans font-normal text-4xl sm:text-5xl text-center pb-10">
                    Community Reviews
                </h1>
                <ReviewCarousel />
                <div className='flex flex-col sm:flex-row bg-white bg-opacity-80 mt-20 p-10 rounded-xl gap-10 items-center justify-center'>
                    <div className='flex flex-col w-1/2 gap-4 items-center justify-center'>
                        <h4 className="text-black font-sans font-normal text-lg sm:text-xl text-center">Never miss an update. Sign up now</h4>
                        <h1 className="text-black font-sans font-normal text-3xl sm:text-4xl text-center">Our Newsletter is worth something</h1>
                    </div>
                    <div className='flex flex-col w-1/2 gap-4 items-center justify-center'>
                    <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full bg-white"
            />
                        <CustomPinkButton 
                            text={"Subscribe"}
                        />
                    </div>
                </div>
            </div>
            <div
                className="bg-[#FFF8F5] h-[60rem] w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/Images/003.png')" }}
            >
                <div className='absolute  bottom-10 left-6 text-left'>
                    <StatusCard 
                        title = {"Business not going as Planned Need a"}
                        subtitle = {"Boost..?"}
                        paragraph = {"Get Idea about our boosting service, ideally make for improving your business"}
                        button2 = {"Details"}
                    />
                </div>
            </div>
            <div
                className="bg-[#FFF8F5] h-[60rem] w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/Images/004.png')" }}
            >
                <div className='absolute  bottom-10 right-6 text-right'>
                    <StatusCard 
                        title = {"Planning a Wedding Don’t have any"}
                        subtitle = {"idea..?"}
                        paragraph = {"Read our excellent blogs and get idea about every simple steps easily. No Fee, Totally Free"}
                        button2 = {"Details"}
                    />
                </div>
            </div>
            <div
                className="bg-[#FFF8F5] h-[60rem] w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/Images/005.png')" }}
            >
                <div className='absolute  bottom-10 left-6 text-left'>
                    <StatusCard 
                        title = {"Feedback"}
                        paragraph = {"We value your thoughts! Share your thought with us... "}
                        button3 = {"Contact Us"}
                    />
                </div>
            </div>
            <div
                className="bg-[#FFF8F5] h-screen w-full bg-no-repeat bg-cover relative"
                style={{ backgroundImage: "url('./src/assets/images/Images/006.png')" }}
            >
                <LandingFooter/>
            </div>
        </div>
    )
}

export default LandingPage