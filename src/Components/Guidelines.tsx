import { Link } from "react-router-dom";

function downloadFiles() {
  // Download the files
  const docxFile = "https://docs.google.com/document/d/14tXiC77v7NYX2_GoxYSetHOUMXo4QlMw/export?format=docx";
  const pdfFile = "https://drive.google.com/uc?export=download&id=1LTmzS5yjMMbpUV5oBKOgja0HzFUE2Bs6";
  window.open(docxFile, "_blank");
  window.open(pdfFile, "_blank");
}
const Guidelines = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="prose mx-4 my-8">
        <h1 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-extrabold text-2xl mb-4 leading-tight">
          Submission Guidelines
        </h1>
        <p className="mb-5 mt-5">
          Authors are solicited to contribute to the conference by submitting
          articles that illustrate research results- projects, surveying works
          and industrial experiences that describe significant advances in
          computing, communication and Automation. Topics of interest for
          submission include, but are not limited to:
        </p>
        <ul className="list-disc mt-5 pl-6 marker:text-zinc-500">
          <li className="mt-2 mb-2 pl-1.5">
            Evolutionary Computing, Distributed and Parallel Processing, Cloud
            and Green Computing, IOT, Data Mining, Advance Database Management
            System
          </li>
          <li className="mt-2 mb-2 pl-1.5">
            Big Data, Data Analysis, Machine Learning and Artificial
            Intelligence, Mobile Computing, Artificial Neural Network, MANETs,
            Computer Networking
          </li>
          <li className="mt-2 mb-2 pl-1.5">
            Cyber security, Virtual Reality, Network Security, WSN, Multimedia
            Applications
          </li>
          <li className="mt-2 mb-2 pl-1.5">Web Intelligence & Semantics</li>
          <li className="mt-2 mb-2 pl-1.5">
            {" "}
            Ubiquitous Computing & Networking
          </li>
          <li className="mt-2 mb-2 pl-1.5">
            {" "}
            Software Engineering & Information Systems
          </li>
          <li className="mt-2 mb-2 pl-1.5">
            {" "}
            Intelligent Systems & Automation
          </li>
          <li className="mt-2 mb-2 pl-1.5">
            {" "}
            Hardware design &amp; Communication
          </li>
          <li className="mt-2 mb-2 pl-1.5">
            {" "}
            Signal & Image Processing, VLSI Design
          </li>
          <li className="mt-2 mb-2 pl-1.5">
            {" "}
            Wireless Sensor Networks, Security
          </li>
          <li className="mt-2 mb-2 pl-1.5"> Robotics & Automation</li>
          <li className="mt-2 mb-2 pl-1.5">
            {" "}
            Communication Network and Systems
          </li>
          <li className="mt-2 mb-2 pl-1.5"> Smart Grid Technologies</li>
          <li className="mt-2 mb-2 pl-1.5"> Smart buildings Technologies</li>
          <li className="mt-2 mb-2 pl-1.5">
            New Measurement technologies and Application, Fuzzy & Neural
            Networks
          </li>
          <p className="mt-5 mb-5">
            Interested authors are invited to submit full papers through
            Microsoft CMT using the below given link. Papers will be accepted
            only by electronic submission through CMT. The authors will need to
            register their email with CMT before submitting there paper. Here is
            a link how to create a CMT account
            https://cmt3.research.microsoft.com/docs/help/general/account-creation.html.
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>
          <div>
            <a
              href=""
              className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"
            >
              <Link to="https://cmt3.research.microsoft.com/ICACCN2026">
                Submit a Paper
              </Link>
            </a>
          </div>
          <p className="mt-5 mb-5">
            Authors need to submit the full final paper (Maximum 6 pages,
            double-column US letter size) as PDF using the templates. Extra
            pages beyond this would require additional page length charges. The
            additional payment required for extra pages is Rs.1000/page for
            Indian authors of all categories and USD 20/page for all categories
            of foreign authors. The paper template can be downloaded from the
            link given below.
          </p>
          <div
            onClick={() => {
              downloadFiles();
            }}
          >
            <a
              href=""
              className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"
            >
              {" "}
              Download Conference Template
            </a>
          </div>
          <h2 className="border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-bold text-lg mt-8 mb-4 leading-relaxed">
            Plagiarism Policy
          </h2>
          <p className="mb-5">
            ICAC2N-25 takes plagiarism very seriously and regard plagiarism as a
            professional misconduct. Papers will be screened for plagiarism and
            when identified the paper will be rejected.
          </p>
          <h2 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-bold text-lg mt-8 mb-4 leading-relaxed">
            Important Message
          </h2>
          <ol className="list-decimal pl-6 mb-3">
            <li className="mt-2 mb-2 pl-1">
              ICAC2N conference organizers have zero tolerance against
              plagiarism and paper formatting as per template. If author found
              violating registration guidelines and instructions provided from
              time to time at any stage during publication the registration of
              paper will be cancelled.
            </li>
            <li className="mt-2 mb-2 pl-1">
              Transfer of e-copyright and presenting paper in conference is
              mandatory.
            </li>
            <li className="mt-2 mb-2 pl-1">
              Corresponding author (as per CMT) keep checking their e-mail
              regularly (including spam) in this regard and for supplying any
              other desired information on time.
            </li>
            <li className="mt-2 mb-2 pl-1">
              {" "}
              Registration fee once paid is non refundable.
            </li>
          </ol>
        </ul>
      </div>
    </div>
  );
};
export default Guidelines;
