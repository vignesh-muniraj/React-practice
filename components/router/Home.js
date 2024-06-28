import React from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Contact from "./Contact";
import About from "./About";
function Home() {
  return (
    <div>
      <h1>This is Home</h1>
      <ul>
        <li>
          <Link to="/" element={<Home />}>
            {" "}
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" element={<About />}>
            {" "}
            About
          </Link>
        </li>
        <li>
          <Link to="/skill" element={<Skills />}>
            Skill
          </Link>
        </li>
        <li>
          <Link to="/contact" element={<Contact />}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
