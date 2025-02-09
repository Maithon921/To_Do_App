import React, { useEffect, useRef, useState } from "react";
import TodoItems from "./TodoItems";
import Header from "./header.jsx";

function ToDo({toggleDarkMode, darkMode, setDarkMode}) {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const [editId, setEditId] = useState(null);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") return;

    if (editId) {
      setTodoList((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editId ? { ...todo, text: inputText } : todo
        )
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
      };
      setTodoList((prev) => [...prev, newTodo]);
    }
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
    if (editId === id) setEditId(null);
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  const edit = (id, text) => {
    setEditId(id);
    inputRef.current.value = text;
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-[310px] sm:min-w-[350px] max-w-md flex flex-col p-7 min-h-[550px] rounded-xl dark:bg-gray-800 border dark:border-gray-700">
      {/* ----------title---------------- */}
      <Header toggleDarkMode = {toggleDarkMode} darkMode ={darkMode} setDarkMode = {setDarkMode}/>
      {/* ----------inputBox---------------- */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full dark:bg-gray-700">
        <input
          type="text"
          ref={inputRef}
          placeholder="Add task"
          className="bg-transparent border-0 outline-none flex-1 h-12 sm:h-14 pl-6 pr-2  placeholder:text-gray-600 "
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-blue-600 px-2 w-32 h-12 sm:h-14 text-white text-base sm:text-lg font-medium cursor-pointer hover:bg-blue-500 duration-300 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {editId ? "SAVE" : "ADD+"}
        </button>
      </div>
      {/* ----------todo List---------------- */}
      <div>
        {todoList.map((item) => {
          return (
            <TodoItems
              key={item.id}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
              edit={edit}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ToDo;
