import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ieeeupLogo from '../assets/ieee-up-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCommitteeOpen, setIsMobileCommitteeOpen] = useState(false);
  const location = useLocation();
  const isHomeRevamp = location.pathname === "/";
  const isWhiteNavbarText = !isHomeRevamp || isScrolled;
  const mobileLinkClass = isWhiteNavbarText
    ? "block w-full px-4 py-2 text-[14px] font-medium uppercase text-white hover:bg-red-800 rounded-none"
    : "block w-full px-4 py-2 text-[14px] font-medium uppercase text-slate-800 hover:bg-slate-100 rounded-none";
  const mobileSubLinkClass = isWhiteNavbarText
    ? "block w-full px-4 py-1.5 text-[13px] font-medium text-red-100 hover:text-white"
    : "block w-full px-4 py-1.5 text-[13px] font-medium text-slate-600 hover:text-red-900";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileCommitteeOpen(false);
  }, [location.pathname]);

  return (
    <>
      <style>
        {`
          .new-badge {
            position: absolute;
            top: -8px;
            right: -15px;
            background: #ff0000;
            color: #fff;
            font-size: 10px;
            padding: 2px 5px;
            border-radius: 10px;
            animation: flash 1.2s infinite;
            font-weight: 600;
            z-index: 10;
          }
          @keyframes flash {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
        `}
      </style>

      {/* Top Bar */}
      <div className={`w-full flex items-stretch z-50 transition-transform duration-300 ${isHomeRevamp ? (isScrolled ? "-translate-y-full absolute top-0 left-0" : "translate-y-0 absolute top-0 left-0") : "relative"}`}>
        {/* Logos and Info on the left */}
        <div className="bg-white px-2 sm:px-6 lg:pl-12 lg:pr-8 py-2 flex items-center gap-3 w-full lg:w-max">
          <img src="https://res.cloudinary.com/dzgfsbzh6/image/upload/v1754138063/samples/Logo_a8pld4.jpg" alt="ICAC2N Logo" className="h-6 sm:h-8 w-auto rounded-sm" />
          <div className="flex items-center justify-center h-6 sm:h-8">
            <img src={ieeeupLogo} alt="IEEE UP Logo" className="h-full w-auto object-contain" />
          </div>
          <div className="hidden lg:flex items-center gap-4 border-l border-gray-300 pl-4 ml-1">
            <span className="text-red-900 text-[12px] sm:text-[13px] tracking-wide">30th & 31st October 2026</span>
            <span className="text-gray-900 text-[11px] sm:text-[12px]">Conference Record Number #70538</span>
            <span className="text-gray-900 text-[11px] sm:text-[12px]">
              <span className="text-red-900 font-medium">IEEE XPLORE COMPLIANT ISBN No.</span> 979-8-3315-6477-3
            </span>
          </div>
        </div>

        {/* Links on the right */}
        <div className="hidden lg:flex flex-1 bg-red-900 text-white text-[12px] sm:text-[13px] font-medium px-4 sm:px-6 lg:px-12 py-2 justify-end items-center gap-5">
          <div className="relative group">
            <Link to="/gallery/2025" className="hover:text-red-200 transition-colors uppercase flex items-center gap-1">
              Gallery
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute top-full right-0 mt-1 w-24 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50">
              <Link to="/gallery/2025" className="block px-3 py-1.5 text-[12px] text-gray-700 hover:bg-red-50 hover:text-red-900 transition-colors">
                2025
              </Link>
            </div>
          </div>
          <Link to="/guidelines" className="hover:text-red-200 transition-colors uppercase">Guidelines</Link>
          <Link to="/contact" className="hover:text-red-200 transition-colors uppercase">Contact</Link>
          <Link to="/cmt-acknowledgement" className="hover:text-red-200 transition-colors uppercase">CMT Acknowledgement</Link>
        </div>
      </div>

      {/* Marquee Updates Notice */}
      <div className={`w-full bg-white border-y border-red-200 shadow-sm overflow-hidden flex items-center z-40 transition-transform duration-300 ${isHomeRevamp ? (isScrolled ? "-translate-y-full absolute left-0" : "translate-y-0 absolute left-0") : "relative"}`} style={isHomeRevamp ? { top: '48px' } : {}}>
        <div className="bg-red-900 text-white font-semibold px-4 py-1.5 text-[13px] whitespace-nowrap z-10 shadow-sm h-full flex items-center relative">
          Latest Updates
          <div className="absolute -right-3 top-0 bottom-0 w-6 bg-red-900 skew-x-12 transform origin-bottom"></div>
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full relative flex items-center ml-4 lg:ml-8">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              display: flex;
              width: max-content;
              animation: scroll 35s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="animate-scroll text-red-900 font-medium py-1.5 text-[14px]">
            {/* Group 1 */}
            <div className="flex items-center justify-around w-max pr-12">
              <span className="mr-12">📌 Welcome to ICAC2N 2026.</span> 
              <span className="mr-12">📌 2nd International Conference on Advances in Computing, Communication and Networking- ICAC2N</span>
              <span className="mr-12">📌 30th & 31st October 2026</span>
              <span className="mr-12">📌 Conference Record Number #70538</span>
              <span>📌 Please check the Important Dates section for deadlines.</span>
            </div>
            {/* Group 2 (Duplicate for infinite effect) */}
            <div className="flex items-center justify-around w-max pr-12" aria-hidden="true">
              <span className="mr-12">📌 Welcome to ICAC2N 2026.</span>
              <span className="mr-12">📌 2nd International Conference on Advances in Computing, Communication and Networking- ICAC2N</span>
              <span className="mr-12">📌 30th & 31st October 2026</span>
              <span className="mr-12">📌 Conference Record Number #70538</span>
              <span>📌 Please check the Important Dates section for deadlines.</span>
            </div>
          </div>
        </div>
      </div>

      <nav className={`${isHomeRevamp ? "fixed" : "sticky"} left-0 w-full z-40 transition-all duration-300 ${isHomeRevamp ? (isScrolled ? "top-0 bg-red-900 shadow-lg" : "top-[86px] bg-transparent") : "top-0 bg-red-900 shadow-lg"}`}>
        <div className="mx-auto px-0 sm:px-6 lg:px-12 w-full">
          <div className="flex items-center justify-between h-[80px] px-2 sm:px-0">
            
            {/* Logo Text */}
            <div className="flex-shrink-0 flex items-center gap-3 sm:gap-4">
              <Link
                to="/"
                className={`flex items-center text-[24px] sm:text-[28px] tracking-tight transition-colors ${
                  isWhiteNavbarText ? "text-white" : "text-red-900"
                }`}
              >
                ICAC2N 2026
              </Link>
              <div className="hidden md:flex flex-col border-l border-red/90 pl-3 md:pl-4">
                <span
                  className={`tracking-wide text-[21px] font-medium leading-tight ${
                    isWhiteNavbarText ? "text-white" : "text-red-900"
                  }`}
                >
                  30th & 31st October 2026
                </span>
                <span
                  className={`text-[12px] uppercase font-semibold tracking-wider mt-0.5 ${
                    isWhiteNavbarText ? "text-white" : "text-red-900"
                  }`}
                >
                  Conference Record Number #70538
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 items-center justify-end px-4">
              <div className="flex items-center space-x-1">
                <Link
                  to="/"
                  className={`px-3 py-2 text-[14px] font-medium transition-colors uppercase ${
                    isWhiteNavbarText ? "text-white hover:text-red-100" : "text-red-900 hover:text-red-900"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`px-3 py-2 text-[14px] font-medium transition-colors uppercase ${
                    isWhiteNavbarText ? "text-white hover:text-red-100" : "text-red-900 hover:text-red-900"
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/speakers"
                  className={`px-3 py-2 text-[14px] font-medium transition-colors uppercase ${
                    isWhiteNavbarText ? "text-white hover:text-red-100" : "text-red-900 hover:text-red-900"
                  }`}
                >
                  Speakers
                </Link>

                {/* Committee Dropdown */}
                <div className="relative group text-[14px] font-medium">
                  <span
                    className={`px-3 py-2 transition-colors flex items-center cursor-pointer uppercase ${
                      isWhiteNavbarText ? "text-white hover:text-red-100" : "text-red-900 hover:text-red-900"
                    }`}
                  >
                    Committee <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                  <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 hidden group-hover:block transition-all z-50">
                    <Link to="/committee/organizing-committee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Organizing Committee</Link>
                    <Link to="/committee/technical-program-committee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Technical Program</Link>
                    <Link to="/committee/advisory-board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Advisory Board</Link>
                  </div>
                </div>

                <Link
                  to="/call-for-papers"
                  className={`px-3 py-2 text-[14px] font-medium transition-colors uppercase ${
                    isWhiteNavbarText ? "text-white hover:text-red-100" : "text-red-900 hover:text-red-900"
                  }`}
                >
                  Call for Papers
                </Link>
                <Link
                  to="/register"
                  className={`px-3 py-2 text-[14px] font-medium transition-colors uppercase ${
                    isWhiteNavbarText ? "text-white hover:text-red-100" : "text-red-900 hover:text-red-900"
                  }`}
                >
                  Register
                </Link>
              </div>
            </div>

            {/* Submit Paper CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://cmt3.research.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={isHomeRevamp 
                  ? `px-4 py-2 rounded text-[14px] font-semibold transition-colors shadow-sm hover:opacity-90 ${isScrolled ? "bg-white text-red-900" : "bg-red-900 text-white"}`
                  : "px-4 py-2 rounded text-[14px] font-semibold text-red-900 bg-white hover:bg-gray-100 transition-colors shadow-sm"
                }
              >
                Submit Paper
              </a>
            </div>

            {/* Mobile Menu Button  */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className={`${isWhiteNavbarText ? "text-white hover:text-red-100" : "text-red-900 hover:text-red-900"} focus:outline-none`}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className={`lg:hidden border-t ${
              isWhiteNavbarText
                ? "bg-red-900/95 border-red-800 backdrop-blur-sm"
                : "bg-white border-slate-200 shadow-md"
            }`}
          >
            <div className="mx-auto px-0 w-full py-4">
              <div className="space-y-1">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                  Home
                </Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                  About
                </Link>
                <Link to="/speakers" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                  Speakers
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileCommitteeOpen((prev) => !prev)}
                  className={`${mobileLinkClass} flex items-center justify-between`}
                >
                  <span>Committee</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${isMobileCommitteeOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isMobileCommitteeOpen && (
                  <div className={`ml-3 border-l pl-2 py-1 ${isWhiteNavbarText ? "border-red-700" : "border-slate-200"}`}>
                    <Link
                      to="/committee/organizing-committee"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={mobileSubLinkClass}
                    >
                      Organizing Committee
                    </Link>
                    <Link
                      to="/committee/technical-program-committee"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={mobileSubLinkClass}
                    >
                      Technical Program
                    </Link>
                    <Link
                      to="/committee/advisory-board"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={mobileSubLinkClass}
                    >
                      Advisory Board
                    </Link>
                  </div>
                )}

                <Link to="/call-for-papers" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                  Call for Papers
                </Link>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                  Register
                </Link>
              </div>

              <div className={`mt-3 pt-3 border-t space-y-1 ${isWhiteNavbarText ? "border-red-800" : "border-slate-200"}`}>
                <Link to="/gallery/2025" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                  Gallery
                </Link>
                <Link to="/guidelines" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                  Guidelines
                </Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                  Contact
                </Link>
                <Link to="/cmt-acknowledgement" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                  CMT Acknowledgement
                </Link>
              </div>

              <a
                href="https://cmt3.research.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex w-full justify-center px-4 py-2 rounded text-[14px] font-semibold transition-colors shadow-sm ${
                  isWhiteNavbarText
                    ? "bg-white text-red-900 hover:bg-red-50"
                    : "bg-red-900 text-white hover:bg-red-800"
                }`}
              >
                Submit Paper
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
