import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Security Technical Consulting Engineer",
          "Tech-Enthusiast",
          "VPN Solutions Specialist",
          "Front-end Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
