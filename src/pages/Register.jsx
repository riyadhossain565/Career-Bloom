import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Porvider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, signInWithGoogle, manageProfile } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setPasswordError("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setPasswordError("Password must contain at least 6 characters");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setPasswordError("Passwords must contain at least one lowercase letter");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Passwords must contain at least one uppercase letter");
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/");
        manageProfile(name, image);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
        toast("Signin successful!");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pb-12">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md my-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register Now!
        </h2>
        <form onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="url"
              name="image"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter photo URL"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-9 right-3 text-gray-500 hover:text-blue-500 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {/* Password Error Message */}
          {passwordError && (
            <div className="text-red-500 text-sm mb-4">{passwordError}</div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-md text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* google sign up */}
        <p className="text-center ">
          <button onClick={handleGoogleSignIn} className="btn btn-outline">
            Sign up with Google
          </button>
        </p>

        {/* Link to Login Page */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
