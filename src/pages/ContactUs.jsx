import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-200">
      <div className="  w-3/6 mx-auto px-4 py-12">
        <div>
          <h1 className="text-3xl">Get In Tounch</h1>
          <p className="text-lg text-gray-500 mb-8">
            Need assistance or have a question? Contact us today via email,
            phone, or our online form. Our team is here to help!
          </p>
          <div className="grid gap-4">
            <input
              className="px-4 py-3 rounded-full"
              type="text"
              placeholder="Enter your Name"
              required
            />
            <input
              className="px-4 py-3 rounded-full"
              type="email"
              placeholder="Enter your Email"
              required
            />
            <input
              className="px-4 py-3 rounded-full"
              type="text"
              placeholder="Phone Number"
              required
            />
            <textarea
              className="px-4 py-3 rounded-2xl"
              placeholder="How can we help?"
              name=""
              id=""
              cols="20"
              rows="8"
            ></textarea>
            <button className="w-full bg-blue-500 text-white py-2 rounded-full font-bold text-lg transition-all hover:bg-blue-600">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
