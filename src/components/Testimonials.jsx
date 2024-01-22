import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newman from "../assets/IMG_Newman.jpeg";
import Romy from "../assets/IMG_Romy.jpg";
import Ziggy from "../assets/IMG_Ziggy.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div
      name="testimonials"
      className="w-full h-auto bg-[#faebd7] text-[#0000ff]"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-4xl mx-auto px-4 w-full grid sm:grid-cols-2 gap-8">
          <div className="text-center sm:text-right pb-8">
            <p className="text-2xl sm:text-3xl font-bold inline border-b-4 border-white">
              Testimonials
            </p>
          </div>
          <div></div>
          {/* Carousel Component */}
          <Slider {...settings}>
            {/* Add your testimonial images here */}
            <div>
              <img src={Newman} alt="Testimonial 1" />
            </div>
            <div>
              <img src={Romy} alt="Testimonial 2" />
            </div>
            <div>
              <img src={Ziggy} alt="Testimonial 3" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
