import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const {
    name,
    description,
    image,
    category,
    pricing,
    rating,
    counselor,
    duration,
  } = useLoaderData();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Service Details | CareerBloom</title>
      </Helmet>

      <div className="p-6 w-5/6 mx-auto pb-16">
        {/* Service Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white shadow-lg rounded-lg p-6">
          <div>
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>
          <div className="col-span-2">
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <p className="text-gray-700 mb-2">
              <strong>Category:</strong> {category}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Price:</strong> {pricing}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Duration:</strong> {duration}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Counselor:</strong> {counselor}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Rating:</strong> {rating}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Description:</strong> {description}
            </p>
          </div>
        </div>

        {/* Comments section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Comments & Feedback</h3>

          {/* Input Field */}
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleAddComment}
              className="ml-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
          {/* Display Comments */}
          {comments.length > 0 ? (
            <ul className="list-disc pl-6 space-y-2">
              {comments.map((comment, index) => (
                <li key={index} className="text-gray-700">
                  {comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              No comments yet. Be the first to leave feedback!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
