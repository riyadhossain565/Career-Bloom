import React from "react";
import personImg1 from "../assets/person (1).jpg";
import personImg2 from "../assets/person (2).jpg";
import personImg3 from "../assets/person (3).jpg";

const Testimonials = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="my-8 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-300 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "Thanks to the career counseling sessions, I was able to land my
              dream job in just 2 months. Highly recommend!"
            </p>
            <div className="mt-4 flex items-center">
              <img
                src={personImg1}
                alt="Client 1"
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="font-semibold">Alexander</p>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "The resume review service was a game-changer for me! My resume
              looks professional, and I started getting more interviews."
            </p>
            <div className="mt-4 flex items-center">
              <img
                src={personImg2}
                alt="Client 2"
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="font-semibold">Lucas</p>
                <p className="text-sm text-gray-500">Marketing Specialist</p>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "I took the career assessment test, and it helped me narrow down
              my career choices. Best decision ever!"
            </p>
            <div className="mt-4 flex items-center">
              <img
                src={personImg3}
                alt="Client 3"
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="font-semibold">Alice Cooper</p>
                <p className="text-sm text-gray-500">HR Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
