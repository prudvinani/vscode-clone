import { useState } from "react";
import vscodes from "../assets/vscode-removebg-preview.png"
import { FiMenu, FiX } from "react-icons/fi"; // Importing menu and cancel icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    // if you want to add shadow you need to add z index

    <div className="fixed top-0 left-0 right-0 bg-dark-bg text-white shadow-sm  md:px-24  ">
      <div className="flex justify-between items-center p-3">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src={vscodes} alt="Visual Studio Code" width={30} height={40} />
          <p className="font-semibold text-lg">Visual Studio Code</p>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden bg-dark-bg">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FiX className="text-xl" /> // Cancel icon
            ) : (
              <FiMenu className="text-xl" /> // Menu icon
            )}
          </button>
        </div>

        {/* Navigation Links (Visible on larger screens) */}
        <div className="hidden md:flex space-x-4 font-medium mr-56 cursor-pointera">
          <p>Docs</p>
          <p>Updates</p>
          <p>Blog</p>
          <p>API</p>
          <p>Extensions</p>
          <p>FAQ</p>
          <p>Search</p>
        </div>

        {/* Search Input and Download Button (Visible on larger screens) */}
        <div className="hidden md:flex items-center space-x-2">
        <input
  type="text"
  placeholder="Search..."
  className="border border-gray-300 rounded-lg px-3 py-2 md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-transparent transition duration-200"
/>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-50">
            Download
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-bg p-4 shadow-lg cursor-pointer">
          <p className="py-1">Docs</p>
          <p className="py-1">Updates</p>
          <p className="py-1">Blog</p>
          <p className="py-1">API</p>
          <p className="py-1">Extensions</p>
          <p className="py-1">FAQ</p>
          <p className="py-1">Search</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;