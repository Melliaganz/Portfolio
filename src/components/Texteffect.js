import React from 'react'
import Typewriter from "typewriter-effect";

function Texteffect() {
  return (
    <Typewriter
    options={{
        strings: [
            "Développeur Full-stack",
            "Développeur Web",
            "Développeur ReactJs",
            "Développeur Front-End",
            "Développeur Back-end",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
    }}></Typewriter>
  )
}

export default Texteffect