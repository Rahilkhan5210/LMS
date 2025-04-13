import { Button } from "@/components/ui/button";
import { carouselData } from "../Students/CrouselData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight, Play, Star, Users, Award, BookOpen, Zap, CheckCircle, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function HeroCarousel() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      // Add inert to non-active slides
      const slides = document.querySelectorAll('.hero-carousel .slick-slide');
      slides.forEach((slide, index) => {
        if (index !== next) {
          slide.setAttribute('inert', '');
        } else {
          slide.removeAttribute('inert');
        }
      });
    }
  };

  // Cleanup inert attributes when component unmounts
  useEffect(() => {
    return () => {
      const slides = document.querySelectorAll('.hero-carousel .slick-slide');
      slides.forEach(slide => slide.removeAttribute('inert'));
    };
  }, []);

  return (
    <div className="mt-0 relative">
      {/* Stats Bar */}
      <div className="absolute top-0 left-0 right-0 bg-white/90 z-10 py-4 shadow-md">
        <div className="container mx-auto flex justify-around items-center">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-bold text-xl">50K+</p>
              <p className="text-sm text-gray-600">Active Learners</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            <div>
              <p className="font-bold text-xl">4.8/5</p>
              <p className="text-sm text-gray-600">Course Rating</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-bold text-xl">100+</p>
              <p className="text-sm text-gray-600">Expert Instructors</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-600" />
            <div>
              <p className="font-bold text-xl">500+</p>
              <p className="text-sm text-gray-600">Courses Available</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-carousel">
        <Slider ref={sliderRef} {...settings}>
          {carouselData.map((item, index) => (
            <div key={item.id} className="outline-none">
              <div className="relative h-[600px] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 container mx-auto flex items-center">
                  <div className="max-w-2xl text-white space-y-6 p-8">
                    {item.highlight && (
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        <Zap className="w-4 h-4" />
                        {item.highlight}
                      </span>
                    )}
                    <h1 className="text-5xl font-bold leading-tight">
                      {item.title}
                    </h1>
                    <p className="text-xl text-gray-200">
                      {item.description}
                    </p>
                    <div className="flex gap-4 items-center">
                      <Button
                        size="lg"
                        onClick={() => navigate(item.link)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                      >
                        {item.buttonText}
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg rounded-full flex items-center gap-2 transition-all duration-300"
                      >
                        <Play className="w-5 h-5" /> Watch Demo
                      </Button>
                    </div>
                    {item.stats && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
                        {item.stats.students && (
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-400" />
                            <div>
                              <p className="font-bold">{item.stats.students}</p>
                              <p className="text-sm text-gray-300">Students</p>
                            </div>
                          </div>
                        )}
                        {item.stats.projects && (
                          <div className="flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-yellow-400" />
                            <div>
                              <p className="font-bold">{item.stats.projects}</p>
                              <p className="text-sm text-gray-300">Projects</p>
                            </div>
                          </div>
                        )}
                        {item.stats.certification && (
                          <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-green-400" />
                            <div>
                              <p className="font-bold">Certificate</p>
                              <p className="text-sm text-gray-300">Included</p>
                            </div>
                          </div>
                        )}
                        {item.stats.tools && (
                          <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-purple-400" />
                            <div>
                              <p className="font-bold">{item.stats.tools}</p>
                              <p className="text-sm text-gray-300">Tools</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style>{`
        .hero-carousel .slick-dots {
          bottom: 25px;
          z-index: 30;
        }
        .hero-carousel .slick-dots li button:before {
          color: white;
          font-size: 12px;
          opacity: 0.5;
        }
        .hero-carousel .slick-dots li.slick-active button:before {
          opacity: 1;
        }
        .hero-carousel .slick-prev, .hero-carousel .slick-next {
          z-index: 30;
          width: 50px;
          height: 50px;
        }
        .hero-carousel .slick-prev {
          left: 25px;
        }
        .hero-carousel .slick-next {
          right: 25px;
        }
        .hero-carousel .slick-slide:not([inert]) {
          outline: none;
        }
        .hero-carousel .slick-slide[inert] * {
          user-select: none;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
      aria-label="Next slide"
    >
      <ArrowRight className="w-6 h-6 text-white" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
      aria-label="Previous slide"
    >
      <ArrowLeft className="w-6 h-6 text-white" />
    </button>
  );
}

export default HeroCarousel; 