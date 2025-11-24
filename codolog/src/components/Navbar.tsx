import image from "../assets/image.png";
import { FaSearch, FaGraduationCap } from "react-icons/fa";
import { IoIosTrendingUp, IoMdHome } from "react-icons/io";
import { FaMicrochip } from "react-icons/fa6";
import { FiMap } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-white w-full shadow-sm">
      <div className="flex flex-wrap items-center justify-between px-4 py-3">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={image} alt="" className="w-16" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Codolog</h1>
            <p className="text-[11px] text-gray-400 -mt-1">
              Always learn unique
            </p>
          </div>
        </div>

        {/* Search Box */}
        <div className="flex items-center border border-gray-400 rounded-full px-3 py-1 w-full md:w-80 mt-3 md:mt-0">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            className="ml-2 w-full focus:outline-none"
            placeholder="What you want to learn"
          />
        </div>

        {/* Icons */}
        <div className="flex space-x-6 text-xl md:text-2xl mt-3 md:mt-0">
          <IoMdHome />
          <IoIosTrendingUp />
          <FaMicrochip />
          <FiMap />
          <FaGraduationCap />
        </div>

        {/* Button */}
        <button className="border border-blue-700 px-4 py-2 rounded-full text-blue-700 font-semibold mt-3 md:mt-0">
          Explore Courses
        </button>

      </div>
    </div>
  );
};

export default Navbar;