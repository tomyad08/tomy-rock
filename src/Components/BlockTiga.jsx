"use client";
import { DataSkill } from "@/DataStatic/DataSkill";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const { DataPriority } = require("@/DataStatic/DataPriority");

const Blocktiga = () => {
  const Data = DataPriority;
  const Skill = DataSkill;
  const [condition, setCondition] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsiveSkill = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };

  return (
    <div
      className="bg-red-800 p-2"
      style={{ backgroundImage: 'url("/backk.png")' }}
    >
      <div className="mx-2">
        <h1
          className="text-4xl font-semibold text-center text-white my-5"
          style={{ fontFamily: "new-rock" }}
        >
          Latest Portfolio
        </h1>
        <Carousel responsive={responsive} infinite={true}>
          {Data.map((value) => (
            <Link href={value.link} key={value.id}>
              <div className="bg-slate-100 rounded-lg mx-2">
                <Image
                  src={value.picture}
                  width={400}
                  height={400}
                  className="rounded-lg drop-shadow-xl"
                  alt=" "
                />
                {condition && (
                  <div>
                    <div className="p-2">
                      <p className=" text-center my-2 font-semibold">
                        {value.name}
                      </p>
                      <p className="text-sm text-justify">
                        {value.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </Carousel>
        <div className="flex justify-center mt-5">
          <button
            className="bg-yellow-500 drop-shadow-xl p-2 w-52 text-black font-semibold rounded-lg"
            onClick={() => setCondition(!condition)}
          >
            See Detail
          </button>
        </div>
      </div>
      <Carousel responsive={responsiveSkill} infinite={true}>
        {Skill.map((value) => (
          <div className="mt-10" key={value.id}>
            <div className="flex justify-center">
              <Image
                src={value.picture}
                alt=" "
                width={50}
                height={50}
                className="p-1 rounded-full -z-10"
              />
            </div>
            <p className="text-sm text-white font-semibold text-center">
              {value.name}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Blocktiga;
