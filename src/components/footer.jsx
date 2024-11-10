import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 py-6 sm:py-8 mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg text-center">
        <div className="text-center">
          <h3 className="font-bold text-lg sm:text-xl">CutURL</h3>
          <p className="mt-1 text-xs sm:text-sm">© 2024 CutURL. All rights reserved.</p>
        </div>

        <div className="mt-3 text-center text-xs sm:text-sm">
          <p>
            <Link
              to="/privacy"
              className="hover:text-red-800 focus-visible:text-red-800 focus:outline-none"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              to="/terms"
              className="hover:text-red-800 focus-visible:text-red-800 focus:outline-none"
            >
              Terms of Service
            </Link>
          </p>
        </div>
        
        <div className="mt-6 text-center text-xs sm:text-sm">
          <p className="text-gray-500">
            It takes a lot of effort to provide this for free. If you find it helpful, consider starring the repo on{" "}
            <a
              href="https://github.com/keshavgarg24/CutURL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              GitHub
            </a> by clicking here.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
