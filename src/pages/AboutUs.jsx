import React from "react";
import { Helmet } from "react-helmet";
import person1 from "../assets/img (1).jpg";
import person2 from "../assets/img (2).jpg";
import person3 from "../assets/img (3).jpg";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | CareerBloom</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-blue-600">About Us</h1>
            <p className="text-lg text-gray-600">
              We are passionate about connecting people and helping them achieve
              their goals.
            </p>
          </div>

          {/* Content Section */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Our Mission */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                Our Mission
              </h2>
              <p>
                To provide exceptional services and build a platform that
                empowers individuals and communities to reach their full
                potential.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                Our Vision
              </h2>
              <p>
                To be a trusted leader in creating impactful and sustainable
                solutions for people around the globe.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                Our Values
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Collaboration</li>
                <li>Excellence</li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Meet Our Team
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={person1}
                  alt="Team Member"
                  className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-medium">John Doe</h3>
                <p className="text-sm text-gray-500">Founder & CEO</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={person2}
                  alt="Team Member"
                  className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-medium">Jane Smith</h3>
                <p className="text-sm text-gray-500">CTO</p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={person3}
                  alt="Team Member"
                  className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-medium">Emily Johnson</h3>
                <p className="text-sm text-gray-500">Marketing Lead</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Want to Know More?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get in touch with us and let’s make something great together.
            </p>
            <a
              href="/contact"
              className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
