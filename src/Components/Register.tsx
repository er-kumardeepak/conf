const pdfFile = "https://drive.google.com/uc?export=download&id=1LTmzS5yjMMbpUV5oBKOgja0HzFUE2Bs6";
const pptxFile = "https://docs.google.com/presentation/d/1Rmjq20fgsvCYWlv2d4AFqP6LowBerJc6/export?format=pptx";

const docxFile = "https://docs.google.com/document/d/14tXiC77v7NYX2_GoxYSetHOUMXo4QlMw/export?format=docx";

const Register = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="prose mx-4 my-8 w-[700px]">
          <h1 className="heading text-tw-prose-headings font-extrabold text-2xl mt-0 mb-2 leading-tight border-l-4 border-red-600 pl-4 pr-4">
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
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <h2 className=" heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-bold text-xl mb-4 leading-relaxed">
            Registration Fee
          </h2>
          <div>
            <img
              src="https://res.cloudinary.com/dzgfsbzh6/image/upload/v1756189379/ICAC2N-25/WhatsApp_Image_2025-08-24_at_17.47.33_s2fwn3.jpg"
              alt=""
              className="max-w-full h-auto my-8"
            />
            <p>* Including 18% GST</p>
          </div>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <h2 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-bold text-xl mb-4 leading-relaxed">
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
          <h2 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-bold text-xl mb-4 leading-relaxed">
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
          <h2 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-bold text-xl mb-4 leading-relaxed">
            Bank Account Details
          </h2>
          <p className="mb-5">
            Here are the bank account details for the registration fee payment.
          </p>
          <p className="mb-5 mt-5">
            <strong>PAYMENT MODE</strong>– NEFT / IMPS / DIRECT DEPOSIT / SWIFT
            TRANSFER/UPI
          </p>
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="p-3">Account Number</td>
                <td className="p-3">88953030000253</td>
              </tr>
              <tr>
                <td className="p-3">Account Name</td>
                <td className="p-3">ITS Engineering College</td>
              </tr>
              <tr>
                <td className="p-3">IFSC Code</td>
                <td className="p-3">CNRB0002807</td>
              </tr>
              <tr>
                <td className="p-3">MICR Code</td>
                <td className="p-3">110015155</td>
              </tr>
              <tr>
                <td className="p-3">Swift Code</td>
                <td className="p-3">CNRBINBBDDS BIC</td>
              </tr>
              <tr>
                <td className="p-3">Bank Name</td>
                <td className="p-3">Canara Bank</td>
              </tr>
              <tr>
                <td className="p-3">Account Type</td>
                <td className="p-3">Current Account - General</td>
              </tr>
              <tr>
                <td className="p-3">Bank Address</td>
                <td className="p-3">Noida, Greater Noida</td>
              </tr>
              <tr>
                <td className="p-3">GST No.</td>
                <td className="p-3">09AAATD0730CIZD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Register;
