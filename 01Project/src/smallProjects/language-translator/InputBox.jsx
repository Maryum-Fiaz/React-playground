import React from "react";

function InputBox() {
  return (
    <div className="p-3 bg-white rounded-lg text-sm">
      <div className="flex justify-between py-1.5">
        <label
          htmlFor=""
          className="inline-block font-semibold text-gray-700 font-mono"
        >
          Source Language
        </label>
        <select name="" id="" className="border border-gray-300 rounded px-1.5 focus:outline-none focus:ring-2 focus:ring-gray-500">
          <option value="">English</option>
          <option value="">Urdu</option>
          <option value="">Arabic</option>
          <option value="">Spanish</option>
        </select>
      </div>

      <div>
        <textarea
          name=""
          id=""
          rows="4"
          placeholder="Type your text here..."
          className="border border-gray-300 rounded-lg w-full bg-transparent p-1.5 scroll-auto focus:outline-none focus:ring-2 focus:ring-gray-500"
        ></textarea>
      </div>
    </div>
  );
}

export default InputBox;
