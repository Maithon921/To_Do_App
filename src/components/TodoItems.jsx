import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import edit_icon from "../assets/edit.png";

function TodoItems({ text, id, isComplete, deleteTodo, toggle, edit }) {
  return (
    <div className="flex items-center my-3 gap-2 rounded-sm ">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : not_tick} alt="ticking" className="w-5 hover:scale-110 duration-300 transition-transform" />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 hover:scale-105 duration-300 transition-transform dark:text-gray-400 ${
            isComplete ? "line-through text-slate-500" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        src={edit_icon}
        alt="edit-Btn"
        className="w-3.5 cursor-pointer hover:scale-110 duration-300 transition-transform dark:invert-[0.50]"
        onClick={() => edit(id, text)}
      />
      <img
        src={delete_icon}
        onClick={() => {
          deleteTodo(id);
        }}
        alt="delete-Btn"
        className="w-3.5 cursor-pointer hover:scale-110 duration-300 transition-transform dark:invert-[0.50]"
      />
    </div>
  );
}

export default TodoItems;
