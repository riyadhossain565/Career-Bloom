import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Porvider/AuthProvider";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.log("ERROR:", error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="nav-link hover:underline">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="nav-link hover:underline">
          About Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile" className="nav-link hover:underline">
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="w-5/6 mx-auto ">
      <div className="navbar">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold">
            CareerBloom
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {user ? (
            <>
              <span className="mr-3 rounded-full">{user.image}</span>
              <button onClick={handleSignOut} className="btn">
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
