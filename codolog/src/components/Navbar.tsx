import image from "../assets/image.png";
import { FaSearch, FaGraduationCap } from "react-icons/fa";
import { IoIosTrendingUp, IoMdHome } from "react-icons/io";
import { FaMicrochip } from "react-icons/fa6";
import { FiMap } from "react-icons/fi";

const navbar = () => {
  return (
    <div className="bg-white ">
      <div className="flex space-x-3">
        <img src={image} alt="" className="w-20 p-3" />
        <div>
          <h1 className="text-3xl font-bold mt-4">Codolog</h1>
          <p className="text-[11px] text-gray-400  -mt-2">
            Always learn unique
          </p>
        </div>
        <div className="flex items-center border-2 border-black h-12 rounded-4xl mt-4 ml-10 w-80 ">
          <FaSearch className="h-full ml-12 font-light" />
          <input
            type="text"
            className="h-full ml-5  focus:outline-0"
            placeholder="what you want to learn"
          />
        </div>
        <div className="flex space-x-9   text-3xl mt-6 ml-30">
          <IoMdHome />
          <IoIosTrendingUp />
          <FaMicrochip />
          <FiMap />
          <FaGraduationCap />
        </div>
        <button className="border-3 border-blue-700 h-10 w-35 rounded-full text-blue-700 font-bold m-5 ml-15">Explore Courses </button>
      </div>
    </div>
  );
};

export default navbar;
