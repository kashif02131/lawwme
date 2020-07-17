import React from "react";
import "./App.css";
import cover from "./cover.png";

function App() {
  return (
    <div class="maintext">
      <h1>
        We are coming up soon! Join us on{" "}
        <a href="https://www.facebook.com/Lawwme-112493720539928">Facebook</a>
      </h1>
      <img class="cover" src={cover} alt="lawwme" />
    </div>
  );
}

export default App;
