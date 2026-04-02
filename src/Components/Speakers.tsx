const Speakers = () => {
  return (
    <div>
      <div className="max-w-full mx-auto py-6 px-2 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto px-2 sm:px-4 my-8 min-h-[calc(100vh-28.8rem)]">
          <h1 className="heading text-tw-prose-headings text-2xl mb-10 leading-tight border-l-4 border-red-600 pl-4 pr-4">
            Speakers for ICAC2N 2026
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
            {/**
             *
             */}
            <div className="col-span-1 border-2 border-red-700 shadow-md grid grid-cols-3 gap-3 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526987/ConferenceAssets/e6oqyrnem9j0ntjdl4cf.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Sri Niwas Singh"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="text-lg">
                  Prof. (Dr.) Sri Niwas Singh
                </span>
                <span className="font-light text-xs pr-2">
                  Director, Atal Bihari Vajpayee- Indian Institute of
                  Information Technology and Management (ABV-IIITM), Gwalior,
                  India / Chairman, India Council, IEEE India.
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526987/ConferenceAssets/mr8mynynoghopnqczm3z.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) M.N.Doja"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) M.N.Doja
                </span>
                <span className="font-light text-xs pr-2">
                  Director IIIT, Sonepat
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/gvxgxu0hevraexehrjx3.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) S. K. Singh"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) S. K. Singh
                </span>
                <span className="font-light text-xs pr-2">
                  Vice Chancellor, Rajasthan Technical University, Kota
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="data:image/jpeg;base64,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"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Varun Kakar"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) Varun Kakar
                </span>
                <span className="font-light text-xs pr-2">
                  Secretary IEEE & B.T.Kumaon Institute of technology, Dwarahat,
                  Uttarakhand
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526987/ConferenceAssets/xh1ay7h3tovn6vttzcwn.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Akhilesh Tiwari"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Dr. Akhilesh Tiwari
                </span>
                <span className="font-light text-xs pr-2">
                  Secretary IEEE and Associate Professor in IIIT Allahabad
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44 overflow-hidden rounded-lg">
                <img  
                  src="/speaker-assets/ashish-gupta.jpg"
                  className="h-full w-full object-cover scale-110"
                  alt="Prof. (Dr.) Ashish Gupta"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) Ashish Gupta
                </span>
                <span className="font-light text-xs pr-2">
                  Vice President, Head of Software, Barco
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1713452019/ConferenceAssets/mpb5dwnyzjdrcghbkef0.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Virender Ranga"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Dr. Virender Ranga
                </span>
                <span className="font-light text-xs pr-2">
                  Associate Professor, Department of Information Technology,
                  Delhi Technological University
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/irbpoz8ub3209wf4wjp5.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) P. Nagabhushan"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) P. Nagabhushan
                </span>
                <span className="font-light text-xs pr-2">
                  Vice-Chancellor, Vignan &#x27;s Foundation for Science,
                  Technology &amp;Research, Andhra Pradesh
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710528682/ConferenceAssets/n6q7ktwnnub0ommxgomd.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Satish K. Singh"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) Satish K. Singh
                </span>
                <span className="font-light text-xs pr-2">
                  IIIT Allahabad / Section Chair, IEEE UP Section.
                </span>
              </div>
            </div>
            {/**Dr. Yogesh S. Chauhan (Section Chair) Department of Electrical Engineering, IIT Kanpur Email: chauhan@iitk.ac.in */}
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1733296487/ConferenceAssets/uv2txzh5wpco4qluuf1e.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Yogesh S. Chauhan"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Dr. Yogesh S. Chauhan
                </span>
                <span className="font-light text-xs pr-2">
                  (Section Chair) IEEE UP Section, Department of Electrical
                  Engineering, IIT Kanpur
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://www.phy.cam.ac.uk/wp-content/uploads/2025/04/saxena-150x150.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Siddharth Saxena"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="py-2">
                    <div className="rounded-full w-fit  bg-blue-800 bg-opacity-20">
                      <p className="px-2 py-0.5 text-sm text-blue-800">
                        International Speaker
                      </p>
                    </div>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) Siddharth Saxena
                </span>
                <span className="font-light text-xs pr-2">
                  Director at Cambridge Central Asia Forum, Jesus College &
                  Principal Research Associate (Professor Rank), Cavendish
                  Laboratory, University of Cambridge
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710528683/ConferenceAssets/yd7bayfsfws9uit52zmx.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Shaymaa R. Tahhan"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit  bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) Shaymaa R. Tahhan
                </span>
                <span className="font-light text-xs pr-2">
                  Laser and Optoelectronics Department, College of Engineering,
                  Al-Nahrain University, Baghdad, Iraq
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710528682/ConferenceAssets/l2cl874gzorwdjklangb.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Anand Nayyar"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit  bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) Anand Nayyar
                </span>
                <span className="font-light text-xs pr-2">
                  School of Computer Science, Faculty of Information Technology,
                  Duy Tan University, Da Nang, Viet Nam
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/gnadmkcrpkfc0fvonpej.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Sandeep Kajal"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit  bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">Dr. Sandeep Kajal</span>
                <span className="font-light text-xs pr-2">
                  Postdocotral Researcher at the Department of Mechanical and
                  Material Enginnering, University of Western Ontario, Canada
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1733215909/ConferenceAssets/ptefrwgmhe6fbnmdiykh.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Sandeep Poddar"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit  bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. Dr. Sandeep Poddar,
                </span>
                <span className="font-light text-xs pr-2">
                  Deputy Vice Chancellor (Research & Innovation) Lincoln
                  University College, Malaysia
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/hvaxgucrjogkzmmelhbq.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Ajay Beniwal"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit  bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">Dr. Ajay Beniwal</span>
                <span className="font-light text-xs pr-2">
                  Marie Curie Fellow at University of Glasgow, United Kingdom
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/evctl9ybkyy4xdha0sqk.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. Dr. Neyara Radwan"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit  bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. Dr. Neyara Radwan
                </span>
                <span className="font-light text-xs pr-2">
                  Associate Professor Industrial Engineering Dept., College of
                  Applied Sciences, AL MAAREFA UNIVERSITY, Saudi Arabia
                  &amp;Mechanical Dept., Faculty of Engineering, Suez Canal
                  University,Egypt
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/rvtqaqd2gl7wupnw8j0a.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Ahmed A. Elngar"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit  bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Dr. Ahmed A. Elngar
                </span>
                <span className="font-light text-xs pr-2">
                  Associate Professor, Faculty of CS and AI, Beni-Suef
                  University, Beni-Suef City, 62511, Egypt
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/mlctgifpndbsn1p2e9sg.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Kashif Nisar"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit  bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">Dr. Kashif Nisar</span>
                <span className="font-light text-xs pr-2">
                  Swinburne University of Technology, Sydney, New South Wales,
                  Australia
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/ci1vwoyuhrum4ashujvn.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Ana Clarke"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit  bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">Dr. Ana Clarke</span>
                <span className="font-light text-xs pr-2">
                  Founder and CEO of AC SmartData
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526983/ConferenceAssets/dggqlawqezcvneess62a.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. Nada Ratković"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit  bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. Nada Ratković
                </span>
                <span className="font-light text-xs pr-2">
                  Assistant Professor, Department of Quantitative Methods on
                  Faculty of Economics, Business and Tourism, University Split.
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/sbbsc4xwoc1l9qogy9tr.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Deepak Garg"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) Deepak Garg
                </span>
                <span className="font-light text-xs pr-2">
                  Vice Chancellor @ SR University | PhD in AI | Founder
                  leadingindia.ai
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/wzcnjyljg4jigusvcmhx.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Asheesh K. Singh"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) Asheesh K. Singh
                </span>
                <span className="font-light text-xs pr-2">
                  Professor EE Department, MNNIT, Allahabad / Immediate Past
                  Section Chair, IEEE UP Section
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/ww12ga3i21esptn3ij7s.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Prabhakar Tiwari"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) Prabhakar Tiwari
                </span>
                <span className="font-light text-xs pr-2">
                  MMMUT, Gorakhpur/ Secretary, IEEE U.P. Section
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/u1sr91reu5ae1eqnjtmy.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Malay Kishore Dutta"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) Malay Kishore Dutta
                </span>
                <span className="font-light text-xs pr-2">
                  Director, Centre for Artificial Intelligence &amp;Dean Student
                  Research, Amity University, Noida, India
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/lcs6eejonbemwbeafix8.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Neetesh Purohit"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) Neetesh Purohit
                </span>
                <span className="font-light text-xs pr-2">
                  Director, SGSITS, Indore
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/zog1nzfyisblpai12ibq.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) N. Badal"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) N. Badal
                </span>
                <span className="font-light text-xs pr-2">
                  Director, REC, Bijnor (U.P.), India
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/bysze53ht5kdi2hwicbo.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) J Ramkumar"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) J Ramkumar
                </span>
                <span className="font-light text-xs pr-2">
                  Professor, IIT Kanpur India, Ex Chair of IEEE UP
                </span>
              </div>
            </div>
            <div className="col-span-1 border-2 border-red-700   shadow-md grid grid-cols-3 gap-3  rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img  
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526983/ConferenceAssets/agwdve3ak2bmgdfujfj0.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Rajiv Saxena"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full  w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className=" text-lg">
                  Prof. (Dr.) Rajiv Saxena
                </span>
                <span className="font-light text-xs pr-2">
                  Vice Chancellor, Jaypee University, Anoopshahr
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Speakers;
