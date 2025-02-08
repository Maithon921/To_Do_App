import { useEffect, useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";

function App() {
  const getMode = () =>{
    const savedMode = localStorage.getItem("mode");
    if(savedMode !== null){
      return JSON.parse(savedMode)
    }
    return window.matchMedia("(prefers-color-scheme : dark)").matches
  }
  const [darkMode, setDarkMode] = useState(getMode);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("mode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <div className={`dark:bg-gray-900 ${darkMode && "dark"}`}>
      <div className=" bg-sky-200  grid py-4 min-w-full min-h-screen dark:bg-gray-900">
        <ToDo
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
    </div>
  );
}

export default App;
