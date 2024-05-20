import React from 'react'
import Typewriter from "typewriter-effect";

function Texteffect() {
  return (
    <Typewriter className="font-monospace"
    options={{
        strings: [
            "Développeur Full-stack",
            "Développeur Web",
            "Développeur ReactJs",
            "Développeur Front-End",
            "Développeur Back-end",
            "Développeur Mobile"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
    }}></Typewriter>
  )
}

export default Texteffect