import React from "react";

function PersonalDetailsForm() {
  return (
    <div className="flex justify-center items-center w-3/4">
      <div className="w-full max-w-md p-8 space-y-6 border border-black rounded-lg">
        <h1 className="text-3xl font-normal text-center text-black">Personal Details</h1>
        
        <div className="space-y-4 flex flex-col gap-4 text-black">
          <div className="text-black">
            <input
              type="text"
              placeholder="name"
              className="input input-bordered border border-black w-full bg-transparent"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered border border-black w-full bg-transparent"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="password"
              className="input input-bordered border border-black w-full bg-transparent pr-10"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button type="button" className="focus:outline-none">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </span>
          </div>
          <div>
            <input
              type="text"
              placeholder="nic"
              className="input input-bordered border border-black w-full bg-transparent"
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <button className="btn btn-primary bg-black border-black text-white hover:border-black hover:bg-transparent hover:text-black">
            Upload NIC Image
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6c-1.1 0-2 .9-2 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 3v5h5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetailsForm;
