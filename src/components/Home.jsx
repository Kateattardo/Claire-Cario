import React from "react";
import Otis from "../assets/Otis.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#faebd7]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex items-center justify-center sm:justify-start">
          {/* Headings */}
          <div>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#556b2f]">
              Claire F. Cario
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#006400]">
              MA, CPDT-KA, FFCT
            </h2>
          </div>
          {/* Circular Image */}
          <img
            src={Otis}
            alt="Home"
            className="rounded-full w-25 h-25 ml-4 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

//   return (
//     <div name="home" className="w-full h-screen bg-[#faebd7]">
//       {/* Container */}
//       <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
//         <h1 className="text-4xl sm:text-7xl font-bold text-[#556b2f]">
//           Claire F. Cario
//         </h1>
//         <h2 className="text-4xl sm:text-7xl font-bold text-[#006400]">
//           MA, CPDT-KA, FFCT
//         </h2>
//       </div>
//     </div>
//   );
// };

export default Home;
