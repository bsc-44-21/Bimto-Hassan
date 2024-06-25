import React from "react";
const Header = () => {
  return (
    <div>
      <nav className="bg-[#2E4053] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">ClothCounture</div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#mens-clothing"
                className="text-white hover:text-gray-200 font-bold"
              >
                Men's Fashion
              </a>
            </li>
            <li>
              <a
                href="#womens-clothing"
                className="text-white hover:text-gray-200 font-bold"
              >
                Women's Fashion
              </a>
            </li>
            <li>
              <a
                href="#womens-clothing"
                className="text-white hover:text-gray-200 font-bold"
              >
                Boy's Fashion
              </a>
            </li>
            <li>
              <a
                href="#womens-clothing"
                className="text-white hover:text-gray-200 font-bold"
              >
                Girl's Fashion
              </a>
            </li>
            <li>
              <a
                href="#womens-clothing"
                className="text-white hover:text-gray-200 font-bold"
              >
                Sports Fashion
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
