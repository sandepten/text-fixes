import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");
  const [resultText, setResultText] = useState("");
  const [words, setWords] = useState("0");

  const handleonchange = (event) => {
    setText(event.target.value);
    let words = text.split(" ");
    let uppercaseword = [];
    words.forEach((element) => {
      if (element.length >= 1) {
        uppercaseword.push(element);
      }
    });
    setWords(uppercaseword.length);
  };
  const clickedOnCaps = () => {
    let newtext = text.toUpperCase();
    setResultText(newtext);
  };
  const clickedOnLow = () => {
    let newtext = text.toLowerCase();
    setResultText(newtext);
  };
  const clickedOnfirstCaps = () => {
    let words = text.split(" ");
    let uppercaseword = " ";
    words.forEach((element) => {
      uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    setResultText(uppercaseword);
  };
  const clickedOnCapitalI = () => {
    let words = text.split(" ");
    let capitali = " ";
    words.forEach((element) => {
      if (element !== "i") {
        capitali += element + " ";
      } else if ((element = "i")) {
        capitali += element.toUpperCase() + " ";
      }
    });
    setResultText(capitali);
  };
  const clickedOnClear = () => {
    setText("");
    setResultText("");
  };
  return (
    <>
      <div className="text-center ">
        <textarea
          placeholder="Enter text here"
          className="h-40 w-3/5 bg-[#352f44] mt-8 text-white"
          value={text}
          onChange={handleonchange}
        ></textarea>
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={clickedOnCaps}
          className="bg-[#dbd8e3] px-3 py-4 mx-3 rounded-xl hover:bg-[#bbb8c2] "
        >
          Convert to Uppercase
        </button>
        <button
          onClick={clickedOnLow}
          className="bg-[#dbd8e3] px-3 py-4 mx-3 rounded-xl hover:bg-[#bbb8c2] "
        >
          Convert to Lowercase
        </button>
        <button
          onClick={clickedOnfirstCaps}
          className="bg-[#dbd8e3] px-3 py-4 mx-3 rounded-xl hover:bg-[#bbb8c2] "
        >
          Convert the first letters to Uppercase
        </button>
        <button
          onClick={clickedOnCapitalI}
          className="bg-[#dbd8e3] px-3 py-4 mx-3 rounded-xl hover:bg-[#bbb8c2] "
        >
          Converts all lower case i to caps
        </button>
        <button
          onClick={clickedOnClear}
          className="bg-[#dbd8e3] px-3 py-4 mx-3 rounded-xl hover:bg-[#bbb8c2] "
        >
          Clear
        </button>
      </div>
      <div className="flex justify-center mt-6">
        <textarea
          className="h-40 w-3/5 bg-[#352f44] mt-8 text-white"
          placeholder="Your result will be shown here"
          readOnly
          value={resultText}
        ></textarea>
      </div>
      <div className=" text-black mt-auto fixed bottom-0 dark:text-white">
        <span className="text-xl ">Text Summary:- </span>
        <span className="text-lg ml-2">
          {/* words: {text.length < 1 ? "0" : text.split(" ").length}{" "} */}
          words: {words}
        </span>
        <span className="text-lg ml-5">Characters: {text.length}</span>
        <span className="text-lg ml-5">
          Time to read: {words * 0.008} minutes
        </span>
      </div>
    </>
  );
}
