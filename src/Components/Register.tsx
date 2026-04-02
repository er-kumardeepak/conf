const pdfFile = "https://drive.google.com/uc?export=download&id=1LTmzS5yjMMbpUV5oBKOgja0HzFUE2Bs6";
const pptxFile = "https://docs.google.com/presentation/d/1Rmjq20fgsvCYWlv2d4AFqP6LowBerJc6/export?format=pptx";

const docxFile = "https://docs.google.com/document/d/14tXiC77v7NYX2_GoxYSetHOUMXo4QlMw/export?format=docx";

const Register = () => {
  const scrollToBankDetails = () => {
    document.getElementById("bank-account-details")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="max-w-full mx-auto py-6 px-2 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 my-8 min-h-[calc(100vh-28.8rem)]">
        <div className="prose max-w-screen-lg mx-2 sm:mx-4">
          <h1 className="heading text-tw-prose-headings text-2xl mb-6 leading-tight border-l-4 border-red-600 pl-4 pr-4 text-left">
            Registration
          </h1>
          <p className="mb-5">
            Learn How to Register for ICAC2N-26: A Guide to Submitting Your
            Papers for the International Conference on Advances in Computing,
            Communication and Networking.
          </p>
          <div>
            <a
              className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"
              href="https://forms.gle/BEaCfyGJwSNbuuHPA"
            >
              Register Now
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="mt-5 mb-3 rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-medium text-red-900 mb-2">
              Already ready with payment details?
            </p>
            <button
              type="button"
              onClick={scrollToBankDetails}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-red-700 hover:bg-red-800 px-4 py-2 rounded-md no-underline"
            >
              Jump to Bank Account Details
              <span aria-hidden="true">↓</span>
            </button>
          </div>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <h2 className="heading text-tw-prose-headings text-xl mb-4 leading-tight border-l-4 border-red-600 pl-4 pr-4 text-left">
            Registration Fee
          </h2>
          <div>
            <img
              src="/Register.jpeg"
              alt="ICAC2N registration fee table"
              className="max-w-full h-auto my-8"
            />
            <p>* Including 18% GST</p>
          </div>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <h2 className="heading text-tw-prose-headings text-xl mb-4 leading-tight border-l-4 border-red-600 pl-4 pr-4 text-left">
            Camera Ready Format
          </h2>
          <p className="mb-5">
            Authors are requested to follow the conference paper format.
          </p>

          <div className="flex flex-col space-y-4">
            <div>
              <a
                className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"
                href={docxFile}
              >
                Download Docx File
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div>
              <a
                className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"
                href={pdfFile}
                download
              >
                Download PDF File
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <h2 className="heading text-tw-prose-headings text-xl mb-4 leading-tight border-l-4 border-red-600 pl-4 pr-4 text-left">
            Sample PPT Format
          </h2>
          <p className="mb-5">
            Please follow the below format for the presentation. The
            presentation should be in the PPT format.
          </p>
          <div className="flex flex-col space-y-4">
            <div>
              <a
                className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"
                href={pptxFile}
                download
              >
                Download PPTX File
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <div
            id="bank-account-details"
            className="scroll-mt-32 rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-4 sm:p-6 shadow-sm"
          >
            <h2 className="heading text-tw-prose-headings text-xl mb-3 leading-tight border-l-4 border-red-600 pl-4 pr-4 text-left">
              Bank Account Details
            </h2>
            <p className="mb-3 text-slate-700">
              Use the following details for registration fee payment.
            </p>
            <p className="mb-4 text-sm font-semibold text-red-900 bg-red-100 border border-red-200 rounded-md px-3 py-2 inline-block">
              PAYMENT MODE: NEFT / IMPS / DIRECT DEPOSIT / SWIFT TRANSFER / UPI
            </p>
            <div className="overflow-x-auto rounded-lg border border-red-200 bg-white">
              <table className="w-full text-sm sm:text-base border-collapse">
                <tbody>
                  <tr className="border-b border-red-100">
                    <td className="p-3 font-semibold text-slate-700 w-[42%] sm:w-1/3">Account Number</td>
                    <td className="p-3 font-bold text-red-900">88953030000253</td>
                  </tr>
                  <tr className="border-b border-red-100 bg-red-50/40">
                    <td className="p-3 font-semibold text-slate-700">Account Name</td>
                    <td className="p-3 text-slate-900">ITS Engineering College</td>
                  </tr>
                  <tr className="border-b border-red-100">
                    <td className="p-3 font-semibold text-slate-700">IFSC Code</td>
                    <td className="p-3 font-bold text-red-900">CNRB0002807</td>
                  </tr>
                  <tr className="border-b border-red-100 bg-red-50/40">
                    <td className="p-3 font-semibold text-slate-700">MICR Code</td>
                    <td className="p-3 text-slate-900">110015155</td>
                  </tr>
                  <tr className="border-b border-red-100">
                    <td className="p-3 font-semibold text-slate-700">Swift Code</td>
                    <td className="p-3 text-slate-900">CNRBINBBDDS BIC</td>
                  </tr>
                  <tr className="border-b border-red-100 bg-red-50/40">
                    <td className="p-3 font-semibold text-slate-700">Bank Name</td>
                    <td className="p-3 text-slate-900">Canara Bank</td>
                  </tr>
                  <tr className="border-b border-red-100">
                    <td className="p-3 font-semibold text-slate-700">Account Type</td>
                    <td className="p-3 text-slate-900">Current Account - General</td>
                  </tr>
                  <tr className="border-b border-red-100 bg-red-50/40">
                    <td className="p-3 font-semibold text-slate-700">Bank Address</td>
                    <td className="p-3 text-slate-900">Noida, Greater Noida</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-700">GST No.</td>
                    <td className="p-3 text-slate-900">09AAATD0730CIZD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
