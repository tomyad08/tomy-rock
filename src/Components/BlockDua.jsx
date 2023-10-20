"use client";
import Image from "next/image";
import "./BlockDua.css";
import Typewriter from "typewriter-effect";
import React from "react";

const BlockDua = () => {
  return (
    <div className="relative xl:h-screen flex justify-center items-center p-3">
      <div className="">
        <h1
          className="xl:text-5xl text-3xl font-semibold px-2"
          style={{ fontFamily: "new-rock" }}
        >
          Hello,
        </h1>
        <h1
          className="xl:text-5xl text-3xl font-semibold px-2 text-red-700"
          style={{ fontFamily: "new-rock" }}
        >
          <Typewriter
            options={{
              strings: ["I'm Tomy Adiansyah"],
              autoStart: true,
              loop: true,
              pauseFor: 10000,
            }}
          />
        </h1>

        <p className="mt-2 mx-2 text-justify text-sm z-90 bg-slate-100 p-2 rounded-lg opacity-70">
          I am a graduate from physics department in Universitas Indonesia 2021.
          I love coding since my last semester to solve math-physics problems.
          But in sep 2022, I tried to learn everything about{" "}
          <strong>frontend web development</strong>. In the past few months, I
          have also been exploring server-side rendering technology in{" "}
          <strong>Next JS</strong>, learning the <strong>GraphQL</strong>
          query language, state management using Redux, and creating rest api
          with <strong>Node JS</strong> and <strong>express JS</strong>. In the
          future, I want to become a <strong>software engineer</strong>.
        </p>

        <div className="flex justify-end">
          <Image
            src="/roses.png"
            width={250}
            height={250}
            alt=" "
            id="anime"
            className="absolute bottom-0 xl:bottom:0 -z-10"
          />
        </div>
      </div>
    </div>
  );
};
export default BlockDua;
