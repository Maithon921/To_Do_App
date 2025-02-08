import React from "react";
import todo_icon from "../assets/todo_icon.png";

function Header({ toggleDarkMode, darkMode, setDarkMode }) {
  const getDateAndDay = () => {
    const dateObj = new Date();
    const date = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    const dates = `${date}-${month}-${year}`;

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[dateObj.getDay()];
    return { dates, day };
  };

  return (
    <div className="flex items-center justify-between mt-7 gap-2">
      <div className="flex">
        <img src={todo_icon} alt="" className="w-8 dark:invert-[0.75]" />
        <h1 className="text-3xl font-semibold dark:text-gray-200">
          To-Do List
        </h1>
      </div>
      <button
        onClick={toggleDarkMode}
        className="rounded-full py-1 px-3 text-3xl w-10  transition-colors duration-75 "
      >
        {darkMode ? (
          <i className="fa-solid fa-sun text-white"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </button>
      <div>
        <p className="text-md font-medium text-blue-900 dark:text-gray-300">
          {getDateAndDay().day}
        </p>
        <p className="text-md font-medium text-blue-900 dark:text-gray-300">
          {getDateAndDay().dates}{" "}
        </p>
      </div>
    </div>
  );
}

export default Header;
