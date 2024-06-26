import React from "react";
import { useEffect,useState } from "react";
import "./Main.css";
import CGradient from "../Color-gradient/Cgrdient";
import TodoList from "../TodoList/TodoList";
import Joke from "../Joke/Joke";
import Weather from "../Weather/Weather";
import LoaderNewton from "../loader-newton/Loader-Newton";
import Shake from "../Shake/Shake";
import Speech from "../SpeechApp/Speech";
import Navbar from "../Navbar/Navbar";
const Main = () => {
  let current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <section className="main-section">
    <div className="heading"><span>All Small Project</span></div>
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
      <div>
        <CGradient />
      </div>
      <div>
        <TodoList />
      </div>
      <div className="joke-weather">
      <div><Weather /></div>
        <div><Joke /></div>
      </div>
      <div>
        <LoaderNewton/>
      </div>
      <div className="shake-speech">
        <Shake/>
        <Speech/>
      </div>
    </section>
  );
};

export default Main;
