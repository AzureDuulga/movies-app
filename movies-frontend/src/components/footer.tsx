import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 py-8 relative bottom-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 text-white mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              euismod, ipsum vel bibendum dictum, urna nisi placerat est, vel
              interdum odio metus non nibh.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-white mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Movies
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  TV Shows
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-white mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p>1234 Movie Street</p>
            <p>Los Angeles, CA 90001</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@moviesite.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
