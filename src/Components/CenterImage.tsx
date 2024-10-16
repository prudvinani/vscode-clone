import vscodeimage from "../assets/home-screenshot-copilot-light.png";
import { useState } from "react";

const CenterImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-dark-bg text-white pt-28 ">
      <div className="text-center ">
        <h1 className="font-bold text-4xl md:text-7xl">Code faster with AI</h1>
        <p className="font-bold md:text-2xl mt-3 text-gray-400 text-sm px-3">
          Visual Studio Code with GitHub Copilot supercharges
        </p>
        <p className="font-bold md:text-2xl text-gray-400 text-sm">
          your code with AI-powered suggestions, right
        </p>
      </div>

      <div className="flex flex-col mt-4 mb-3  md:flex-row md:justify-center items-center bg-dark-bg text-white  ">
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-semibold text-center "
         >
          Download for Windows
        </button>
        <button className=" text-black font-semibold px-4 py-2 rounded ml-2 bg-gray-200 gap-1 mt-1  ">
          Try GitHub Copilot
        </button>
      </div>

      {/* Reserve space for the paragraph */}
      <p
        className={`text-xs text-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          height: '20px', // Fixed height to prevent movement
          visibility: isHovered ? 'visible' : 'hidden',
          transition: 'visibility 0s linear 0.3s' 
        }}
      >
        By using VS Code, you agree to its{' '}
        <span className="font-bold underline">license</span> and{' '}
        <span className="font-bold underline">privacy statement.</span>
      </p>

      <img src={vscodeimage} alt="" className="px-10 md:px-24  md:mt-5" />
    </div>
  );
};

export default CenterImage;