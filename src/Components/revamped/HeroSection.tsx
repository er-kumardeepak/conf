import { useEffect, useState } from "react";
import { Laptop, Wifi, BookOpen } from 'lucide-react';
import { Link } from "react-router-dom";

const galleryImages = [
  "/All 2025 ICAC2N Images/unnamed4.jpg",
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const autoPlayTimer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % galleryImages.length);
    }, 2000);

    return () => window.clearInterval(autoPlayTimer);
  }, []);

  return (
    <section 
      className="relative w-full min-h-screen flex items-start lg:items-center bg-white bg-fixed pt-20"
    >
      {/* Dark Overlay exactly like ICANN 2025 */}
      
      <div className="w-full px-2 sm:px-6 lg:pl-12 lg:pr-8 relative z-10 text-red-900 pt-24 sm:pt-32 lg:pt-36 pb-2">
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-10 lg:gap-14">
          <div className="order-2 w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full">
              <div className="relative h-[300px] sm:h-[340px] lg:h-[460px] rounded-xl overflow-hidden border border-red-900/15 bg-red-100">
                {galleryImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`ICAC2N gallery ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover brightness-150 ${
                      index === activeSlide ? "block" : "hidden"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-[50%] transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] sm:text-xs font-semibold tracking-wide text-red-900">
                  ICAC2N-25
                </div>
              </div>
            </div>
          </div>

          {/* Exact typography styling as ICANN 2025 */}
          <div className="order-1 w-full lg:w-1/2" style={{ animation: 'fade-right 1s ease-out forwards' }}>
            
            <h2 className="text-[25px] sm:text-[30px] md:text-[35px] leading-[1.2] mb-1 text-red-900">
              <span className="text-red-900">2<sup className="text-[0.6em] align-super">nd</sup>{" "}</span>IEEE International Conference on Advances in <span className="text-red-900"> Computing, Communication and Networking</span>
            </h2>
            
            <h2 className="text-[25px] sm:text-[30px] md:text-[35px] mb-2 text-red-900">
              ICAC2N 2026
            </h2>
            <div className="flex items-center mb-1 text-red-900 font-medium relative w-fit">
                  <p>Conference Record Number <span className="text-red-900">#70538</span></p>
            </div>
            <div className="flex items-center mb-6 text-red-900 font-medium relative w-fit">
                  <p>IEEE XPLORE COMPLIANT ISBN No. <span className="text-red-900">979-8-3315-6477-3</span></p>
            </div>

            <p className="text-[15px] sm:text-[16px] text-gray-900 leading-[1.7] mb-8 max-w-[900px] text-justify">
              ICAC2N is a prestigious international conference that brings together top researchers, scientists, engineers, and scholars from around the world to share their latest research findings and experiences in computing, communication, and networking. Featuring keynote speeches, technical sessions, and workshops, the conference covers a wide range of topics such as cloud computing, AI, wireless communication systems, IoT, and cybersecurity. ICAC2N offers a stimulating platform for participants to network, collaborate, and engage with experts in their fields. All the previous conference proceedings of this series are published on IEEE Xplore, making it accessible to all worldwide.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              <div className="flex items-center text-red-900 font-medium">
                  <div className="p-1 mr-2 text-red-900"><Wifi className="w-6 h-6" /></div>
                  <p>Collaborations through networking.</p>
              </div>
              <div className="flex items-center text-red-900 font-medium">
                  <div className="p-1 mr-2 text-red-900"><Laptop className="w-6 h-6" /></div>
                  <p>Excellent opportunity for the scientific community.</p>
              </div>
              <div className="flex items-center text-red-900 font-medium relative w-fit">
                  <div className="p-1 mr-2 text-red-900"><BookOpen className="w-6 h-6" /></div>
                  <Link to="https://ieeexplore.ieee.org/Xplore/home.jsp" className="hover:text-red-900 transition-colors underline-offset-4 hover:underline">
                    Link to IEEE Xplore
                  </Link>
              </div>
            </div>

            <div className="mt-8 mb-0 sm:my-8">
              <Link 
                to="/guidelines"
                className="inline-block bg-transparent border-2 border-red hover:bg-red-900 hover:text-white text-red-900 font-medium text-[16px] px-8 py-3 rounded-sm transition-all"
              >
                View Guidelines
              </Link>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
