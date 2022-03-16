import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const darkmode = () => {
    let dark = document.querySelector("#dark-switch");
    if (dark.checked === true) {
      document.body.classList.add("dark", "bg-[#2a2438]");
      document.body.classList.remove("bg-slate-300");
    } else if (dark.checked === false) {
      document.body.classList.add("bg-slate-300");
      document.body.classList.remove("dark", "bg-[#2a2438]");
    }
  };
  return (
    <div>
      <nav>
        <ul className="flex justify-end bg-[#352f44] text-white">
          <span className="mr-auto py-3 ml-10 font-bold text-xl cursor-pointer hover:text-[#dbd8e3] ">
            <Link to="/">{props.title}</Link>
          </span>
          <li className="text-lg rounded-xl hover:bg-[#dbd8e3] hover:text-black py-3 px-6">
            <Link className="" to="/About">
              About
            </Link>
          </li>
          <li className="py-3 text-lg px-6 rounded-xl hover:bg-[#dbd8e3] hover:text-black mr-8">
            Contact
          </li>
          <li className="mt-3">
            <label
              htmlFor="dark-switch"
              className="flex items-center cursor-pointer relative mb-4"
            >
              <input
                type="checkbox"
                id="dark-switch"
                className="sr-only"
                onClick={darkmode}
              />
              <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
              <span className="ml-3 text-white text-sm mr-4">Dark mode</span>
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "BEGINING",
};
