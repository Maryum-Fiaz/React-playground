import React, { useCallback, useEffect, useRef, useState } from "react";
import myImage from "../assets/pattern4.jpg";

function PasswordGen() {
  //useState
  let [password, setPassword] = useState("YidrlKOo");
  const [range, setRange] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [notes, setNotes] = useState(false);

  // useRef
  const passwordRef = useRef(null);

  // useCallback
  const generatePassword = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numberAllowed) characters += "0123456789";
    if (charAllowed) characters += '!@#$%^&*"|/?><';

    for (let i = 0; i < range; i++) {
      const charAtIndex = Math.floor(Math.random() * characters.length);
      let pickChar = characters.charAt(charAtIndex);
      pass += pickChar;
    }

    setPassword(pass);
  }, [range, numberAllowed, charAllowed]);

  //copyToClipboard
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect
  useEffect(() => {
    generatePassword();
  }, [numberAllowed, charAllowed, range, generatePassword]);

  return (
    <section
      className="w-full min-h-screen flex flex-col gap-4 justify-center items-center bg-cover bg-center px-4 py-6"
      style={{ backgroundImage: `url(${myImage})` }}
    >
      {/* Main Card */}
      <div className="bg-gray-200/95 w-full max-w-xl p-5 rounded flex flex-col gap-4 shadow-2xl border border-gray-300 backdrop-blur-sm">
        {/* Input + Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            className="outline-none border-2 border-rose-400 px-4 py-2 w-full rounded bg-white"
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
          />

          <div className="flex gap-2">
            <button
              className="bg-rose-600 text-gray-100 px-4 py-2 rounded font-semibold cursor-pointer hover:bg-rose-700 transition duration-200 w-full sm:w-auto"
              onClick={copyToClipboard}
            >
              Copy
            </button>

            <button
              className="bg-rose-600 text-gray-100 px-4 py-2 rounded font-semibold cursor-pointer hover:bg-rose-700 transition duration-200 w-full sm:w-auto"
              onClick={() => generatePassword()}
            >
              Regen
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 font-semibold text-rose-700">
          <div className="flex items-center gap-2">
            <input
              className="accent-rose-600"
              type="range"
              min={8}
              max={20}
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
            <span>{range} letters</span>
          </div>

          <div className="flex items-center gap-2">
            <input
              className="accent-rose-600"
              type="checkbox"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
            />
            <span>Numbers</span>
          </div>

          <div className="flex items-center gap-2">
            <input
              className="accent-rose-600"
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <span>Characters</span>
          </div>
        </div>
      </div>

      {/* Info Card */}
      <button
        onClick={() => setNotes(!notes)}
        className="px-3 py-2 rounded border border-rose-500 bg-rose-200 cursor-pointer"
      >
        {notes ? "x" : "Notes"}
      </button>

      {notes && (
        <div className="bg-gray-300/95 p-4 rounded-2xl w-full max-w-xl shadow-lg">
          {" "}
          <h4 className="font-bold">
            useCallback, useEffect and useRef used
          </h4>{" "}
          <p>
            - <span className="font-bold text-rose-900">useCallback:</span> is a
            React Hook that lets you cache a function definition between
            re-renders. <br /> (used to memoized generatePassword func){" "}
          </p>{" "}
          <p>
            - <span className="font-bold text-rose-900">useRef:</span> is a
            React Hook that lets you reference a value thats not needed for
            rendering. <br /> (used to copy password){" "}
          </p>{" "}
        </div>
      )}
    </section>
  );
}

export default PasswordGen;
