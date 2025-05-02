import React, { useState, useRef, useEffect } from "react";
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { GiTwoCoins } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import GranthSetu from "../../assets/GranthSetu.png";
import './Navbar.css';

const Navbar = () => {
  const [isBooksOpen, setIsBooksOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isEngineeringOpen, setIsEngineeringOpen] = useState(false);
  const [isEngineering1Open, setIsEngineering1Open] = useState(false);

  const booksRef = useRef(null);
  const notesRef = useRef(null);
  const userRef = useRef(null);
  const navigate = useNavigate();

  const toggleBooksDropdown = () => {
    setIsBooksOpen(!isBooksOpen);
    setIsNotesOpen(false);
    setIsUserOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserOpen(!isUserOpen);
    setIsBooksOpen(false);
    setIsNotesOpen(false);
  };

  const toggleNotesDropdown = () => {
    setIsNotesOpen(!isNotesOpen);
    setIsBooksOpen(false);
    setIsUserOpen(false);
  };

  const toggleEngineeringDropdown = () => {
    setIsEngineeringOpen(!isEngineeringOpen);
  };

  const toggleEngineering1Dropdown = () => {
    setIsEngineering1Open(!isEngineering1Open);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        booksRef.current && !booksRef.current.contains(event.target) &&
        notesRef.current && !notesRef.current.contains(event.target) &&
        userRef.current && !userRef.current.contains(event.target)
      ) {
        setIsBooksOpen(false);
        setIsNotesOpen(false);
        setIsUserOpen(false);
        setIsEngineeringOpen(false);
        setIsEngineering1Open(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={GranthSetu} alt="logo" className="h-16 w-16 mr-3" />
          <span className="font-lobster-regular text-3xl text-[#004aad]">
            BookShare
          </span>
        </div>

        {/* Middle: Navigation */}
        <div className="flex items-center space-x-4">
          <a href="/" className="text-gray-700 hover:text-[#ff914d]">Home</a>

          {/* Books Dropdown */}
          <div className="relative" ref={booksRef}>
            <button
              onClick={toggleBooksDropdown}
              className="text-gray-700 hover:text-[#ff914d] focus:outline-none"
            >
              Books
            </button>
            {isBooksOpen && (
              <div className="absolute right-0 top-full bg-white shadow-lg mt-2 z-10 w-48 shadow-[#f0ffff]">
                <div className="flex flex-col p-4">
                  <h4 className="font-bold text-center mb-3">Academic & Professional</h4>
                  <div className="relative">
                    <button
                      onClick={toggleEngineeringDropdown}
                      className="hover:text-[#ff914d] focus:outline-none"
                    >
                      Engineering
                    </button>
                    {isEngineeringOpen && (
                      <div className="absolute left-full top-0 bg-white shadow-lg mt-0 z-10 w-40">
                        <div className="flex flex-col p-4">
                          {Array.from({ length: 8 }, (_, i) => (
                            <a key={i} href="#" className="hover:text-[#ff914d]">
                              Sem {i + 1}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <a href="#" className="hover:text-[#ff914d]">Medical</a>
                  <a href="#" className="hover:text-[#ff914d]">Arts</a>
                  <a href="#" className="hover:text-[#ff914d]">Novel</a>
                  <a href="#" className="hover:text-[#ff914d]">Others</a>
                </div>
              </div>
            )}
          </div>

          {/* Notes Dropdown */}
          <div className="relative" ref={notesRef}>
            <button
              onClick={toggleNotesDropdown}
              className="text-gray-700 hover:text-[#ff914d] focus:outline-none"
            >
              Notes
            </button>
            {isNotesOpen && (
              <div className="absolute right-0 top-full bg-white shadow-lg mt-2 z-10 w-48 shadow-[#f0ffff]">
                <div className="flex flex-col p-4">
                  <h4 className="font-bold text-center mb-3">Academic & Professional</h4>
                  <div className="relative">
                    <button
                      onClick={toggleEngineering1Dropdown}
                      className="hover:text-[#ff914d] focus:outline-none"
                    >
                      Engineering
                    </button>
                    {isEngineering1Open && (
                      <div className="absolute left-full top-0 bg-white shadow-lg mt-0 z-10 w-40">
                        <div className="flex flex-col p-4">
                          {Array.from({ length: 8 }, (_, i) => (
                            <a key={i} href="#" className="hover:text-[#ff914d]">
                              Sem {i + 1}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <a href="#" className="hover:text-[#ff914d]">Medical</a>
                  <a href="#" className="hover:text-[#ff914d]">Arts</a>
                  <a href="#" className="hover:text-[#ff914d]">Novel</a>
                  <a href="#" className="hover:text-[#ff914d]">Others</a>
                </div>
              </div>
            )}
          </div>

          <a href="/about" className="text-gray-700 hover:text-[#ff914d]">About</a>
          <a href="#" className="text-gray-700 hover:text-[#ff914d]">Request a Book</a>

          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Title, Author, Publisher or ISBN"
              className="border-2 border-[#004aad] rounded-full px-4 py-2 w-96 focus:outline-none"
            />
            <button className="text-[#004aad] p-3 rounded-r-full">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right: User and Cart */}
        <div className="flex space-x-4 items-center">
          {/* User Dropdown */}
          <div className="relative" ref={userRef}>
            <button
              onClick={toggleUserDropdown}
              className="text-[#004aad] hover:text-[#ff914d] focus:outline-none"
            >
              <FaUser />
            </button>
            {isUserOpen && (
              <div className="absolute right-0 top-full bg-white shadow-lg mt-2 z-10 w-48 shadow-[#f0ffff]">
                <div className="flex flex-col p-4">
                  <button className="bg-[#004aad] text-white py-3 px-6 mb-3 rounded-full">Log in</button>
                  <a href="#" className="text-[#004aad] hover:text-[#ff914d] mb-2">New to BookShare? Sign up</a>
                  <a href="#" className="hover:text-[#ff914d]">Your Account</a>
                  <a href="#" className="hover:text-[#ff914d]">Personal Settings</a>
                  <a href="#" className="hover:text-[#ff914d]">Your Orders</a>
                  <a href="#" className="hover:text-[#ff914d]">Your Wishlist</a>
                  <a href="#" className="hover:text-[#ff914d]">Your Addresses</a>
                  <a href="#" className="hover:text-[#ff914d]">Change Password</a>
                </div>
              </div>
            )}
          </div>



 

  <button
    onClick={() => navigate("/cart")}
    className="text-[#ff914d] text-2xl hover:text-[#004aad] focus:outline-none"
  >
  <FaShoppingCart />
</button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
