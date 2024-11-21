import React from "react";

const CallOfAction = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="bg-blue-500 text-white py-12 px-4 text-center rounded-lg my-8">
        <h2 className="text-3xl font-semibold mb-4">
          Take the Leap Toward Your Dream Career
        </h2>
        <p className="text-xl mb-6">
          Our expert counselors are ready to help you achieve your career goals.
        </p>
        <a
          href=""
          className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
};

export default CallOfAction;
