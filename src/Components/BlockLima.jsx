"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const BlockLima = () => {
  const [inputs, setInputs] = useState({});
  const [verif, setVerif] = useState(false);

  const end =
    "https://script.google.com/macros/s/AKfycby_G3nuAI2gvzTwq1cQhvRiPZTeW5f5FjEKZiN8I3ooirPc7phkv6WFipmZkcDLcUfo2Q/exec";
  const styleInput =
    "p-2 w-full bg-white border-b-2 border-slate-200 focus:outline-none text-black";
  const styleLabel = "text-red-800 text-sm mt-2";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("full_name", inputs.full_name || " ");
    formData.append("email", inputs.email || " ");
    formData.append("company", inputs.company || " ");
    formData.append("write_anything", inputs.write_anything || " ");

    fetch(end, { method: "POST", body: formData }).then(() => setVerif(true));
  };

  return (
    <div
      className="bg-white xl:h-screen flex justify-center items-center xl:rounded-t-full py-10 xl:py-0"
      style={{ backgroundImage: 'url("/backk.png")' }}
    >
      <div className="xl:h-96">
        {verif && (
          <div className="flex justify-center">
            <div className="text-sm text-black rounded-lg text-center bg-blue-300 p-2 w-52">
              Thank you for submitting
            </div>
          </div>
        )}
        <h1 className="text-center text-2xl xl:text-4xl font-semibold text-red-800 mb-5 mx-2">
          Any feedback?
        </h1>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full xl:w-2/4 p-5 bg-white rounded-lg drop-shadow-xl"
          >
            <label className={styleLabel}>Full Name</label>
            <input
              className={styleInput}
              type="text"
              name="full_name"
              value={inputs.full_name || ""}
              onChange={handleChange}
            />
            <label className={styleLabel}>Company</label>
            <input
              className={styleInput}
              type="text"
              name="company"
              value={inputs.company || ""}
              onChange={handleChange}
            />
            <label className={styleLabel}>Email</label>
            <input
              className={styleInput}
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
            <label className={styleLabel}>Write Anything</label>
            <textarea
              className={styleInput}
              name="write_anything"
              value={inputs.write_anything || ""}
              onChange={handleChange}
            />
            <button
              className="p-2 w-full bg-slate-600 rounded-lg mt-5 text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-center text-black p-4">
          <h1 className="text-sm">
            Thank you has been visiting, I hope we will discuss more about any
            opportunity
          </h1>
          <span className="mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlockLima;
