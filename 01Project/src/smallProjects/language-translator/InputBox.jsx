import React, { useId } from "react";

function InputBox({
  label,
  sentence,
  onSentenceChange,
  onLangChange,
  languageOptions = [],
  selectLanguage = "English",
  isDisabled = false,
  color = "bg-white",
}) {

  const sentenceInputId = useId();
  console.log('ididid: ', sentenceInputId)


  return (
    <div className="p-3 bg-white rounded-lg text-sm">
      <div className="flex justify-between py-1.5">
        <label
          htmlFor={sentenceInputId}
          className="inline-block font-semibold text-gray-700 font-mono"
        >
          {label}
        </label>

        <select
          name=""
          id={sentenceInputId}
          className="border border-gray-300 rounded px-1.5 focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={selectLanguage}
          onChange={(e) => onLangChange && onLangChange(e.target.value)}
        >
          {languageOptions.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>

      <div>
        <textarea
          rows="4"
          placeholder="Type your text here..."
          className={`border border-gray-300 rounded-lg w-full p-1.5 scroll-auto focus:outline-none focus:ring-2 focus:ring-gray-500 ${color}`}
          disabled={isDisabled}
          value={sentence}
          onChange={(e) => onSentenceChange && onSentenceChange(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default InputBox;
