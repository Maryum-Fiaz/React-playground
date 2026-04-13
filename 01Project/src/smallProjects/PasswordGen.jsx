import React, { useCallback, useEffect, useRef, useState } from "react";
import myImage from "../assets/pattern.png";

function PasswordGen() {
    //useState
  let [password, setPassword] = useState("YidrlKOo");
  const [range, setRange] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  

  // useRef
  const passwordRef = useRef(null);

  // useCallback
  const generatePassword = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if(numberAllowed) characters += '0123456789'
    if(charAllowed) characters += '!@#$%^&*"|/?><'

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
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect
  useEffect(() =>{
    generatePassword()
    
  }, [numberAllowed, charAllowed, range, generatePassword])

  return (
    <section
      className="w-full bg-emerald-600 h-screen flex flex-col gap-2 justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${myImage})` }}
    >
      <div className="bg-gray-200 w-fit h-fit p-5 rounded-2xl flex flex-col gap-3 shadow-xl border-2">
        <div className="flex justify-between gap-2">
          <input
            className="outline-none appearance-none border-2 border-emerald-400 px-3 py-1.5 w-full rounded-2xl"
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button className="bg-emerald-600 text-gray-200 px-4 py-2 rounded-2xl font-bold cursor-pointer hover:bg-emerald-800 duration-200"
          onClick={copyToClipboard}
          >
            Copy
          </button>

          <button className="bg-emerald-600 text-gray-200 px-4 py-2 rounded-2xl font-bold cursor-pointer hover:bg-emerald-800 duration-200"
          onClick={() => generatePassword()}
          >
            Regen
          </button>
        </div>

        <div className="flex gap-2 font-bold text-emerald-700 ">
          <input
            className="accent-emerald-600"
            type="range"
            min={8}
            max={20}
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
          <span>({range})letter</span>

          <input
            className="accent-emerald-600"
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
          />
          <span>numbers</span>

          <input className="accent-emerald-600"
           type="checkbox"
           checked={charAllowed}
           onChange={() => setCharAllowed(prev => !prev)}
           />
          <span>characters</span>
        </div>
      </div>

      <div className="bg-gray-300 p-2 rounded mt-3 w-2xl">
        <h4 className="font-bold">useCallback, useEffect and useRef used</h4>
        <p>- <span className="font-bold text-emerald-900">useCallback:</span> is a React Hook that lets you cache a function definition between re-renders. <br />
          (used to memoized generatePassword func)
        </p>
        <p>- <span className="font-bold text-emerald-900">useRef:</span> is a React Hook that lets you reference a value thats not needed for rendering. <br />
          (used to copy password)
         </p>
      </div>
    </section>
  );
}

export default PasswordGen;
