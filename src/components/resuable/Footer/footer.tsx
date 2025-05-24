import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-5">
      <div className=" w-9/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="/"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </Link>

            <Link
              href="/search"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Search
            </Link>

            <Link
              href="/bookmarks"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Bookmarks
            </Link>

            <Link
              href="/create-post"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Create Post
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
