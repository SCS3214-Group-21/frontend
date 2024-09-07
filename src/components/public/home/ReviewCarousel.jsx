import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import components
import ReviewCard from './ReviewCard'

// const CustomPrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle bg-custom-primary hover:bg-custom-secondary border-none hover:text-white"
//       onClick={onClick}
//     >
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//       </svg>
//     </button>
//   );
// };

// const CustomNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle bg-custom-primary hover:bg-custom-secondary border-none hover:text-white"
//       onClick={onClick}
//     >
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
//       </svg>
//     </button>
//   );
// };

const ReviewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Auto-slide interval in milliseconds
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
        {
          breakpoint: 768, // Adjust the breakpoint as needed
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      {
        breakpoint: 640, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      image: "../src/assets/images/Images/01.png",
      name: "Ramath Perera",
      time: "5h Ago",
      text: "This website made planning our wedding so much easier! We found the perfect photographer and florist in just a few clicks. Organizing Content was so easy",
    },
    {
      id: 2,
      image: "../src/assets/images/Images/02.png",
      name: "Ramath Perera",
      time: "5h Ago",
      text: "This website made planning our wedding so much easier! We found the perfect photographer and florist in just a few clicks. Organizing Content was so easy",
    },
    {
      id: 3,
      image: "../src/assets/images/Images/03.png",
      name: "Ramath Perera",
      time: "5h Ago",
      text: "This website made planning our wedding so much easier! We found the perfect photographer and florist in just a few clicks. Organizing Content was so easy",
    },
    {
      id: 4,
      image: "../src/assets/images/Images/04.png",
      name: "Ramath Perera",
      time: "5h Ago",
      text: "This website made planning our wedding so much easier! We found the perfect photographer and florist in just a few clicks. Organizing Content was so easy",
    },
    {
      id: 5,
      image: "../src/assets/images/Images/05.png",
      name: "Ramath Perera",
      time: "5h Ago",
      text: "This website made planning our wedding so much easier! We found the perfect photographer and florist in just a few clicks. Organizing Content was so easy",
    },
    {
      id: 6,
      image: "../src/assets/images/Images/06.png",
      name: "Ramath Perera",
      time: "5h Ago",
      text: "This website made planning our wedding so much easier! We found the perfect photographer and florist in just a few clicks. Organizing Content was so easy",
    },
    {
      id: 7,
      image: "../src/assets/images/Images/00.png",
      name: "Ramath Perera",
      time: "5h Ago",
      text: "This website made planning our wedding so much easier! We found the perfect photographer and florist in just a few clicks. Organizing Content was so easy",
    },
  ];

  return (
    <div className="w-full  px-0 sm:px-10 md:px-20 xl:px-44">
      <style jsx>{`
        .slick-dots {
          bottom: -30px !important; /* Adjust position */
        }

        .slick-dots li button:before {
          font-size: 12px !important; /* Change the size of the dots */
          color: #006972 !important; /* Default color of the dots */
          opacity: 0.5 !important; /* Default opacity of the dots */
        }

        .slick-dots li.slick-active button:before {
          color: #a57e17 !important; /* Active dot color */
          opacity: 1 !important; /* Active dot opacity */
        }
      `}</style>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-16 sm:px-2">
            <div className='w-72 h-60'>
                <ReviewCard 
                img={slide.image}
                name={slide.name}
                time={slide.time}
                review={slide.text}
                />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
