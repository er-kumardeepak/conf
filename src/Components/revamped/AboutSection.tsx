import { GraduationCap, CalendarDays, FileText, Link as LinkIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const speakers = [
  { name: "Prof. (Dr.) S. K. Singh", role: "National Speaker", title: "Vice Chancellor, Rajasthan Technical University, Kota", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/gvxgxu0hevraexehrjx3.jpg" },
  { name: "Dr. Akhilesh Tiwari", role: "National Speaker", title: "Secretary IEEE and Associate Professor in IIIT Allahabad", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526987/ConferenceAssets/xh1ay7h3tovn6vttzcwn.jpg" },
  { name: "Dr. Virender Ranga", role: "National Speaker", title: "Associate Professor, Department of Information Technology, Delhi Technological University", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1713452019/ConferenceAssets/mpb5dwnyzjdrcghbkef0.jpg" },
  { name: "Prof. (Dr.) P. Nagabhushan", role: "National Speaker", title: "Vice-Chancellor, Vignan's Foundation for Science, Technology & Research, Andhra Pradesh", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/irbpoz8ub3209wf4wjp5.jpg" },
  { name: "Prof. (Dr.) Satish K. Singh", role: "National Speaker", title: "IIIT Allahabad / Section Chair, IEEE UP Section", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710528682/ConferenceAssets/n6q7ktwnnub0ommxgomd.jpg" },
  { name: "Prof. (Dr.) Shaymaa R. Tahhan", role: "International Speaker", title: "Laser and Optoelectronics Department, College of Engineering, Al-Nahrain University, Baghdad, Iraq", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710528683/ConferenceAssets/yd7bayfsfws9uit52zmx.jpg" },
  { name: "Prof. (Dr.) Anand Nayyar", role: "International Speaker", title: "School of Computer Science, Faculty of Information Technology, Duy Tan University, Da Nang, Viet Nam", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710528682/ConferenceAssets/l2cl874gzorwdjklangb.jpg" },
  { name: "Dr. Sandeep Kajal", role: "International Speaker", title: "Postdoctoral Researcher, Department of Mechanical and Material Engineering, University of Western Ontario, Canada", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/gnadmkcrpkfc0fvonpej.jpg" },
  { name: "Dr. Ajay Beniwal", role: "International Speaker", title: "Marie Curie Fellow at University of Glasgow, United Kingdom", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/hvaxgucrjogkzmmelhbq.jpg" },
  { name: "Prof. Dr. Neyara Radwan", role: "International Speaker", title: "Associate Professor Industrial Engineering Dept., AL MAAREFA UNIVERSITY, Saudi Arabia", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/evctl9ybkyy4xdha0sqk.jpg" },
  { name: "Dr. Ahmed A. Elngar", role: "International Speaker", title: "Associate Professor, Faculty of CS and AI, Beni-Suef University, Egypt", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/rvtqaqd2gl7wupnw8j0a.jpg" },
  { name: "Dr. Kashif Nisar", role: "International Speaker", title: "Swinburne University of Technology, Sydney, New South Wales, Australia", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/mlctgifpndbsn1p2e9sg.jpg" },
  { name: "Dr. Ana Clarke", role: "International Speaker", title: "Founder and CEO of AC SmartData", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/ci1vwoyuhrum4ashujvn.jpg" },
  { name: "Prof. Nada Ratković", role: "International Speaker", title: "Assistant Professor, Department of Quantitative Methods, University Split", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526983/ConferenceAssets/dggqlawqezcvneess62a.jpg" },
  { name: "Prof. (Dr.) Deepak Garg", role: "National Speaker", title: "Vice Chancellor @ SR University | PhD in AI | Founder leadingindia.ai", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/sbbsc4xwoc1l9qogy9tr.jpg" },
  { name: "Prof. (Dr.) Asheesh K. Singh", role: "National Speaker", title: "Professor EE Department, MNNIT, Allahabad / Immediate Past Section Chair, IEEE UP Section", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/wzcnjyljg4jigusvcmhx.jpg" },
  { name: "Prof. (Dr.) Prabhakar Tiwari", role: "National Speaker", title: "MMMUT, Gorakhpur / Secretary, IEEE U.P. Section", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/ww12ga3i21esptn3ij7s.jpg" },
  { name: "Prof. (Dr.) Malay Kishore Dutta", role: "National Speaker", title: "Director, Centre for Artificial Intelligence & Dean Student Research, Amity University, Noida", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/u1sr91reu5ae1eqnjtmy.jpg" },
  { name: "Prof. (Dr.) Neetesh Purohit", role: "National Speaker", title: "Director, SGSITS, Indore", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/lcs6eejonbemwbeafix8.jpg" },
  { name: "Prof. (Dr.) N. Badal", role: "National Speaker", title: "Director, REC, Bijnor (U.P.), India", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/zog1nzfyisblpai12ibq.jpg" },
  { name: "Prof. (Dr.) J Ramkumar", role: "National Speaker", title: "Professor, IIT Kanpur India, Ex Chair of IEEE UP", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/bysze53ht5kdi2hwicbo.jpg" },
  { name: "Prof. (Dr.) Rajiv Saxena", role: "National Speaker", title: "Vice Chancellor, Jaypee University, Anoopshahr", image: "https://res.cloudinary.com/dooi3sikb/image/upload/v1710526983/ConferenceAssets/agwdve3ak2bmgdfujfj0.jpg" },
];

const icac25Glimpses = [
  "/ICAC2N/unnamed (4).jpg",
  "/ICAC2N/unnamed (1).jpg",
  "/ICAC2N/unnamed (2).jpg",
  "/ICAC2N/unnamed (3).jpg",
];

const gallerySectionImages = [
  "/All 2025 ICAC2N Images/unnamed.jpg",
  "/All 2025 ICAC2N Images/unnamed (1).jpg",
  "/All 2025 ICAC2N Images/unnamed3.jpg",
  "/All 2025 ICAC2N Images/unnamed4.jpg",
  "/All 2025 ICAC2N Images/unnamed5.jpg",
  "/All 2025 ICAC2N Images/unnamed6.jpg",
  "/All 2025 ICAC2N Images/unnamed7.jpg",
  "/All 2025 ICAC2N Images/unnamed8.jpg",
  "/All 2025 ICAC2N Images/unnamed9.jpg",
];

const orderedLightboxImages = Array.from(new Set([...icac25Glimpses, ...gallerySectionImages]));

const AboutSection = () => {
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));
  const [selectedGlimpse, setSelectedGlimpse] = useState<number | null>(null);
  const isLightboxOpen = selectedGlimpse !== null;

  const showPreviousGlimpse = () => {
    setSelectedGlimpse((prev) =>
      prev === null ? null : (prev - 1 + orderedLightboxImages.length) % orderedLightboxImages.length
    );
  };

  const showNextGlimpse = () => {
    setSelectedGlimpse((prev) =>
      prev === null ? null : (prev + 1) % orderedLightboxImages.length
    );
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedGlimpse(null);
        return;
      }
      if (event.key === "ArrowLeft") {
        setSelectedGlimpse((prev) =>
          prev === null ? null : (prev - 1 + orderedLightboxImages.length) % orderedLightboxImages.length
        );
        return;
      }
      if (event.key === "ArrowRight") {
        setSelectedGlimpse((prev) =>
          prev === null ? null : (prev + 1) % orderedLightboxImages.length
        );
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const autoSlideTimer = window.setInterval(() => {
      setSelectedGlimpse((prev) =>
        prev === null ? null : (prev + 1) % orderedLightboxImages.length
      );
    }, 2500);

    return () => window.clearInterval(autoSlideTimer);
  }, [isLightboxOpen]);

  return (
    <section className="py-2 bg-white relative">
      <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8 space-y-2">
        
        {/* Subtle decorative elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        {/* Microsoft CMT Notice (Hero Section Style - White Theme, Long Width) */}
        <div className="w-full flex items-start gap-2 p-4 rounded-sm bg-white border-l-4 border-red-900 shadow-md relative overflow-hidden group">
          <div className="z-10 w-full">
            <h3 className="text-[20px] sm:text-[25px] md:text-[20px] leading-[1.2] text-slate-900 mb-2 tracking-tight">Microsoft CMT Notice</h3>
            <p className="text-[15px] sm:text-[16px] text-slate-900 leading-[1.7] text-justify">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </div>

        {/* Important Dates (Migrated from Original Home Page) */}
        <div className="w-full rounded-sm py-8 px-2 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <CalendarDays className="text-red-900 w-8 h-8" />
            <h2 className="text-[18px] sm:text-[20px] text-slate-900 leading-[1.2]">Important Dates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Date Item 1 */}
            <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-sm relative overflow-hidden group hover:border-red-900 transition-colors">
              <div className="absolute top-0 right-0 p-2">
                <span className="bg-[#0d6efd] text-white text-[10px] px-2 py-0.5 rounded  uppercase tracking-wider">NEW</span>
              </div>
              <p className="text-slate-500 text-sm mb-1">01/10/2025</p>
              <h4 className="text-slate-900  text-lg">Paper Submission Starts</h4>
            </div>

            {/* Date Item 2 */}
            <div className="bg-white p-5 rounded-sm border border-red-100 shadow-sm relative overflow-hidden group hover:border-red-300 transition-colors">
              <div className="absolute top-0 right-0 p-2">
                <span className="bg-[#ff0000] text-white text-[10px] px-2 py-0.5 rounded  uppercase tracking-wider">IMPORTANT</span>
              </div>
              <p className="text-red-600 text-sm  mb-1">30/04/2026</p>
              <h4 className="text-red-900  text-lg">Paper Submission Deadline</h4>
            </div>

            {/* Date Item 3 */}
            <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-sm group hover:border-red-900 transition-colors">
              <p className="text-slate-500 text-sm  mb-1">30/06/2026</p>
              <h4 className="text-slate-900  text-lg">Notification of Acceptance</h4>
            </div>

            {/* Date Item 4 */}
            <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-sm group hover:border-red-900 transition-colors">
              <p className="text-slate-500 text-sm  mb-1">14/07/2026</p>
              <h4 className="text-slate-900  text-lg">Registration</h4>
            </div>

            {/* Date Item 5 */}
            <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-sm group hover:border-red-900 transition-colors">
              <p className="text-slate-500 text-sm  mb-1">31/07/2026</p>
              <h4 className="text-slate-900  text-lg">Camera Ready Paper</h4>
            </div>

            {/* Date Item 6 */}
            <div className="bg-white p-5 rounded-sm shadow-md border-l-4 border-red-900 group">
              <p className="text-slate-900 text-sm  mb-1">October 30th - 31st, 2026</p>
              <h4 className="text-slate-900  text-lg">Conference Date</h4>
            </div>

          </div>
        </div>

        {/* Important Forms and Links Container */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 sm:px-8 pb-8">
          
          {/* Important Forms */}
          <div className="w-full">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-red-900 w-8 h-8" />
              <h2 className="text-[18px] sm:text-[20px] text-slate-900 leading-[1.2]">Important Forms</h2>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="https://forms.gle/BEaCfyGJwSNbuuHPA" target="_blank" className="bg-white p-5 rounded-sm border border-slate-200 shadow-sm relative overflow-hidden group hover:border-red-900 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                 <h4 className="text-slate-900 text-[16px]">Presentation (PPT) Submission Link</h4>
                 <div className="flex items-center gap-2 shrink-0">
                    <span className="bg-[#ff0000] text-white text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">IMPORTANT</span>
                 </div>
              </Link>
            </div>
          </div>

          {/* Important Links */}
          <div className="w-full">
            <div className="flex items-center gap-3 mb-6">
               <LinkIcon className="text-red-900 w-8 h-8" />
               <h2 className="text-[18px] sm:text-[20px] text-slate-900 leading-[1.2]">Important Links</h2>
            </div>
            <div className="flex flex-col gap-4">
               <Link to="https://conference-website-beryl.vercel.app" target="_blank" className="bg-white p-5 rounded-sm border border-slate-200 shadow-sm group hover:border-red-900 transition-colors flex items-center justify-between">
                  <h4 className="text-slate-900 text-[16px]">ICAC2N - Previous Year Conference</h4>
                  <LinkIcon className="text-slate-400 w-4 h-4 group-hover:text-red-900 transition-colors" />
               </Link>
               <Link to="https://ieeexplore.ieee.org/xpl/conhome/10894760/proceeding" target="_blank" className="bg-white p-5 rounded-sm border border-slate-200 shadow-sm group hover:border-red-900 transition-colors flex items-center justify-between">
                  <h4 className="text-slate-900 text-[16px]">IEEE Explore</h4>
                  <LinkIcon className="text-slate-400 w-4 h-4 group-hover:text-red-900 transition-colors" />
               </Link>
               <Link to="/cmt-acknowledgement" className="bg-white p-5 rounded-sm border border-slate-200 shadow-sm group hover:border-red-900 transition-colors flex items-center justify-between">
                  <h4 className="text-slate-900 text-[16px]">CMT Acknowledgement</h4>
                  <LinkIcon className="text-slate-400 w-4 h-4 group-hover:text-red-900 transition-colors" />
               </Link>
            </div>
          </div>

        </div>

        {/* Premium Layout */}
        <div className="flex flex-col gap-6 relative z-10">
          
          {/* Main Focus: About ICAC2N (1 Column) */}
          <div className="w-full group relative rounded-sm px-2 sm:px-8 pt-4 pb-0 overflow-hidden">
            <div className="absolute top-0 right-0 py-8 px-2 sm:p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-blue-900 transform translate-x-4 -translate-y-4">
               <GraduationCap size={70} />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-[18px] sm:text-[20px] md:text-[25px]  text-slate-900 mb-6 leading-[1.2]">About ICAC2N</h2>
              <p className="text-[15px] sm:text-[16px] text-slate-900 leading-[1.7] text-justify">
                ICAC2N is a prestigious international conference that brings together top researchers, scientists, engineers, and scholars from around the world to share their latest research findings and experiences in computing, communication and networking. Featuring keynote speeches, technical sessions, and workshops, the conference covers a wide range of topics such as cloud computing, AI, wireless communication systems, IoT, and cybersecurity.
              </p>
            </div>
          </div>

          {/* ICAC2N-25 Glimpses */}
          <div className="w-full px-2 sm:px-8">
            <div className="flex items-end justify-between gap-3 mb-5">
              <span className="text-[12px] sm:text-[13px] uppercase tracking-wide text-red-900 font-medium">
                ICAC2N-25
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {icac25Glimpses.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedGlimpse(index)}
                  className="h-[140px] sm:h-[180px] md:h-[210px] rounded-md overflow-hidden border border-slate-200 shadow-sm group text-left"
                >
                  <img
                    src={encodeURI(image)}
                    alt={`ICAC2N-25 glimpse ${index + 1}`}
                    className="w-full h-full brightness-150 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Honourable Speakers Carousel */}
          <div className="w-full">
            <div className="flex items-center justify-between px-2 sm:px-8 mb-6 gap-4">
              <h3 className="text-[20px] sm:text-[25px] text-slate-900 leading-[1.2]">Hon'ble Speakers</h3>
              <Link
                to="/speakers"
                className="inline-block px-6 py-2 bg-red-900 text-white rounded-full shadow hover:bg-red-700 transition-colors text-sm font-semibold shrink-0"
              >
                View All
              </Link>
            </div>
            <Carousel
              plugins={[plugin.current]}
              opts={{ align: "start", loop: true }}
              className="w-full px-2 sm:px-8"
            >
              <CarouselContent className="-ml-4">
                {speakers.map((speaker, index) => (
                  <CarouselItem key={index} className="pl-4 basis-10/12 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="flex flex-col items-center text-center p-4 gap-3">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-32 h-32 object-cover rounded-full border border-slate-200 shadow-sm"
                      />
                      <div>
                        <p className="text-[15px] text-slate-900 leading-[1.4]">{speaker.name}</p>
                        <p className="text-[13px] text-slate-500 leading-[1.5] mt-1">{speaker.title}</p>
                      </div>
                      <span className={`text-[11px] px-2 py-0.5 rounded uppercase tracking-wider ${
                        speaker.role === "National Speaker"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-blue-50 text-blue-700"
                      }`}>{speaker.role}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-2" />
              <CarouselNext className="hidden sm:flex -right-2" />

            </Carousel>
          </div>

          {/* 2 Column Layout (College & Right-Side Image) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch">
            
            {/* About College */}
            <div className="w-full rounded-sm py-8 px-2 sm:p-8 transition-all duration-500 group flex flex-col gap-4">
               <h3 className="text-[20px] mb-2 sm:text-[25px] text-slate-900 leading-[1.2]">About I.T.S Engineering College</h3>
               <p className="text-[15px] sm:text-[16px] text-slate-900 leading-[1.7] text-justify">
                 I.T.S Engineering College, located in Greater Noida, is a distinguished institution for Engineering and Management, founded by leading professionals committed to delivering high-quality, industry-focused education at an affordable cost.
               </p>
               <p className="text-[15px] sm:text-[16px] text-slate-900 leading-[1.7] text-justify">
                 With a rich history spanning around three decades, the ITS Education Group has emerged as a key player in higher education in North India, operating nine institutes with more than 20,000 students and a dedicated staff of over 1,250. The group excels in various disciplines, including Information Technology, Engineering, Management, Dental, Pharmacy, and Physiotherapy.
               </p>
               <p className="text-[15px] sm:text-[16px] text-slate-900 leading-[1.7] text-justify">
                 Established in 2006 under the visionary leadership of Chairman Dr. R.P. Chadha, ITS Engineering College holds NBA accreditation, showcasing its dedication to providing top-notch education. Approved by AICTE and affiliated with AKTU-Lucknow.
               </p>
               <p className="text-[15px] sm:text-[16px] text-slate-900 leading-[1.7] text-justify">
                 The college offers diverse programs, such as B. Tech in Civil, Computer Science & Engineering (CSE), CSE-Artificial Intelligence and Machine Learning, CSE-Data Science, Electronics and Communication Engineering, Electronics Engineering (VLSI Design and Technology), Electrical and Computer Engineering, Mechanical Engineering, as well as an MBA program in Marketing, Finance, Human Resource, Operations, International Business and Information Technology.
               </p>
            </div>

            {/* Right Column Full Image */}
            <div className="w-full h-full rounded-xl overflow-hidden border border-slate-100 shadow-md">
               <img
                 src="https://itsengg.edu.in/public/upload/1746879536.png"
                 alt="Department of CSE and Engineering"
                 className="w-full h-full object-cover min-h-[320px] md:min-h-0"
               />
            </div>

          </div>

          {/* About Department (Moved Down) */}
          <div className="w-full rounded-sm py-8 px-2 sm:p-8 transition-all duration-500 group">
             <h3 className="text-[20px] sm:text-[25px] mb-6 text-slate-900 leading-[1.2]">About Department of Computer Science & Engineering</h3>
             <p className="text-[15px] sm:text-[16px] text-slate-900 leading-[1.7] text-justify whitespace-pre-wrap">
               The Computer Science & Engineering Department at ITSEC offers a UG program in Computer Science & Engineering is designed to equip individuals with the necessary computer skills to succeed in the industry, and provide practical knowledge to prepare them for professional readiness. The program is structured to cover both the theoretical foundations and latest developments in computing solutions. Throughout the program, CSE students will develop expertise in algorithm and software design, development, and testing, and will learn to create effective computing solutions that address various social, economic, and organizational domains. It also offers B. Tech in Artificial Learning and Machine Learning at ITS Engineering College is an undergraduate programme with advanced learning solutions imparting knowledge of advanced innovations like Machine Learning, often called Deep Learning and Artificial Intelligence. Apart from CSE and AIML, ITSEC offers B. Tech in the specialization of Data Science which is a rapidly growing field that involves the analytical technique of extracting usable information from a pool of data for the benefit of businesses. Corporations require this valuable data for their strategic planning, forecasting, fraud detection, and decision-making amongst many other uses.
             </p>
          </div>

          {/* Highlights Section */}
          <div className="w-full px-2 sm:px-8 mt-2">
            <h3 className="text-[20px] sm:text-[25px] text-slate-900 leading-[1.2] mb-6 border-b border-slate-200 pb-2">Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Part of 31-year old exceptional education legacy of ITS",
                "Approved Business Incubation Centre by DST, MSME and Govt. of India",
                "Pool of Illustrious faculty with Doctorates, IITians & NITians",
                "Technology based industrial collaboration via Skill Enhancement Centre",
                "NBA accreditation in B.Tech – ECE branch",
                "Outstanding placement record in B.Tech and MBA programs",
                "Strong and Resourceful network of over 5000 alumni",
                "Regular expert talks, national and international seminars and conferences",
                "State of Art Infrastructure"
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-sm border border-slate-100 shadow-sm hover:border-red-900 transition-colors group">
                  <div className="mt-1 text-red-900 shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[15px] text-slate-800 leading-[1.5]">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Rankings Section */}
          <div className="w-full mt-8 px-2 sm:px-8 mb-8">
            <h3 className="text-[20px] sm:text-[25px] text-slate-900 leading-[1.2] mb-6 border-b border-slate-200 pb-2">Awards, Recognitions & Rankings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Careers360 – AAA ranking", desc: "Received AAA ranking by Careers360 in 'India’s Best Engineering Institutes' 2024 for strong academic quality and placement performance." },
                { title: "Top Engineering Colleges Survey 2024", desc: "Honored by The Academic Insights for commendable contribution to engineering education, innovation, and societal development." },
                { title: "Top Engineering College of Eminence 2024", desc: "Awarded by Competition Success Review (CSR) for excellence in academic delivery and institutional performance." },
                { title: "Collegedunia Excellence Award 2024", desc: "Received for outstanding achievements in 'Excellence in Academics and Digital Advancement in the Higher Education category'." },
                { title: "NIRF Innovation Band (151–300), 2023", desc: "Ranked amongst top 151-300 band in NIRF Innovation ranking 2023 across pan India." },
                { title: "Highest Pan-India Ranking by IIC", desc: "Achieved the highest national ranking (up to 5 Stars) by the Institution’s Innovation Council (IIC), Ministry of Education, for five consecutive years." },
                { title: "Top Five in India – CSR 2023", desc: "Ranked amongst the top five in India in CSR’s Outstanding Engineering Colleges of Excellence ranking for 2023." },
                { title: "Collegedunia Excellence Award 2023", desc: "Honoured for outstanding contributions to Engineering and Management Education, highlighting innovation-driven learning." },
                { title: "Excellent ARIIA Rankings", desc: "Secured an excellent ARIIA Rank in 2021 and ranked 6–25 among Private Institutions in the ARIIA 2020 rankings." },
                { title: "Best Leadership Entrepreneur Award 2020", desc: "Honoured with the Best Leadership Entrepreneur Award presented to Hon’ble Vice Chairman Mr. Sohil Chadha by the Prestigious Kotler Awards." }
              ].map((award, idx) => (
                <div key={idx} className="bg-white p-6 rounded-sm border-t-4 border-red-900 shadow-md group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                  <div className="text-[40px] font-bold text-slate-100/50 absolute -right-2 -top-2 transition-colors z-0 select-none">
                    #{idx + 1}
                  </div>
                  <h4 className="text-[17px] font-semibold text-slate-900 mb-3 relative z-10 leading-[1.3] pr-8">{award.title}</h4>
                  <p className="text-[14px] text-slate-600 leading-[1.6] relative z-10">{award.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {selectedGlimpse !== null && (
        <div
          className="fixed inset-0 bg-black/85 z-[120] flex items-center justify-center p-4"
          onClick={() => setSelectedGlimpse(null)}
        >
          <button
            type="button"
            aria-label="Close full image view"
            onClick={() => setSelectedGlimpse(null)}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/95 text-red-900 text-xl leading-none shadow-md"
          >
            &times;
          </button>
          <button
            type="button"
            aria-label="Show previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousGlimpse();
            }}
            className="absolute left-2 sm:left-4 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/95 text-red-900 shadow-md flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <img
            src={encodeURI(orderedLightboxImages[selectedGlimpse])}
            alt={`ICAC2N-25 full image ${selectedGlimpse + 1} of ${orderedLightboxImages.length}`}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-md"
            onClick={(event) => event.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-red-900 text-xs sm:text-sm px-3 py-1 rounded-full shadow">
            {selectedGlimpse + 1} / {orderedLightboxImages.length}
          </div>
          <button
            type="button"
            aria-label="Show next image"
            onClick={(event) => {
              event.stopPropagation();
              showNextGlimpse();
            }}
            className="absolute right-2 sm:right-4 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/95 text-red-900 shadow-md flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
