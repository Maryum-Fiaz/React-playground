import React, { useState } from "react";
import InputBox from "./InputBox";
import useTranslation from "./useTranslation";
import { LANGUAGE_OPTIONS } from "./data/languageData";

function FinalBox() {
  const [sentence, setSentence] = useState("");
  const [from, setFrom] = useState("en")
  const [to, setTo] = useState("ur")

  const result = useTranslation(sentence, from, to);
  const placeholderTranslation = useTranslation("Type your text here...", "en", to)

  function handleClearBtn() {
    setSentence("");
  }


  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="w-full p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg">
        {/* <form onSubmit={(e) => 
        e.preventDefault()
          
        }> */}


          <InputBox
            label="Source Language"
            sentence={sentence}
            onSentenceChange={(newSent) => setSentence(newSent)}
            selectLanguage={from}
            onLangChange={(lang) => setFrom(lang) }
            languageOptions={Object.entries(LANGUAGE_OPTIONS)}
          />

          <hr className="my-2 text-gray-300" />

          <InputBox
            label="Target Language"
            isDisabled
            color="bg-gray-100"
            sentence={result}
            selectLanguage={to}
            onLangChange={(to) => setTo(to)}
            languageOptions={Object.entries(LANGUAGE_OPTIONS)}
            placeholder={placeholderTranslation || "Translating placeholder..."}
          />

          <div className="flex justify-between mt-2">
            <span className="font-semibold text-gray-400 text-sm">Ready</span>
            <button type="reset"
              className="bg-blue-500 text-white px-2 py-1 text-sm rounded-md"
              onClick={() => handleClearBtn()}
            >
              Clear
            </button>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default FinalBox;
