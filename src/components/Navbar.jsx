import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <nav className="bg-dark">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-12 xl:px-0">
        <div className="flex items-center justify-between h-20 w-100">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Lifetime Fitness logo" />
            </Link>
            <div className="hidden lg:block ml-auto">
              <div className="flex items-baseline space-x-4">
                <Link
                  to="/about"
                  className="text-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  ABOUT
                </Link>

                <Link
                  to="/discover"
                  className="text-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  DISCOVER
                </Link>

                <Link
                  to="/"
                  className="text-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  MEMBERS PLANS
                </Link>

                <Link
                  to="/contact-us"
                  className="text-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  CONTACT US
                </Link>

                <Link
                  to="/become-a-partner"
                  className="text-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  BECOME A PARTNER
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-light rounded text-light px-2 py-1"
                >
                  LOG IN
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-light"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {ref => (
          <div className="lg:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/about"
                className="hover:bg-gray-700 text-light block px-3 py-2 rounded-md text-base font-medium"
              >
                ABOUT
              </Link>

              <Link
                to="/discover"
                className="text-light block px-3 py-2 rounded-md text-base font-medium"
              >
                DISCOVER
              </Link>

              <Link
                tp="/discover"
                className="text-light block px-3 py-2 rounded-md text-base font-medium"
              >
                MEMBERS PLANS
              </Link>

              <Link
                to="/discover"
                className="text-light block px-3 py-2 rounded-md text-base font-medium"
              >
                CONTACT US
              </Link>

              <Link
                to="discover"
                className="text-light block px-3 py-2 rounded-md text-base font-medium mb-2"
              >
                BECOME A PARTNER
              </Link>
              <Link
                to="/login"
                className="border-2 border-light rounded text-light px-2 py-1 text-base font-medium ml-2 mt-6 inline-block"
              >
                LOG IN
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
