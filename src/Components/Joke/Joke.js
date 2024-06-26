import React, { useState, useEffect } from "react";
import "./Joke.css";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const api = "https://icanhazdadjoke.com/";

  const fetchData = async () => {
    try {
      const response = await fetch(api, {
        headers: {
          accept: "application/json",
        },
      });
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error(error);
      setJoke("Failed to fetch joke, please try again later.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="joke-section">
      <div className="container">
      <p className="project-name">Joke</p>
        <h1>Welcome to jokes!</h1>
        <section className="api_body">{joke}</section>
        <button id="fetchJoke" onClick={fetchData}>
          Get another joke
        </button>
      </div>
    </div>
  );
};

export default Joke;
