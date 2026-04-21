import React, { useState } from "react";
import InputBox from "./InputBox";
import useTranslation from "./useTranslation";
import { LANGUAGE_OPTIONS } from "./data/languageData";

function FinalBox() {
  const [sentence, setSentence] = useState("");
  const [from, setFrom] = useState("en")
  const [to, setTo] = useState("ur")

  // calling custom hook
  const result = useTranslation(sentence, from, to);

  // custom hook for placeholder
  const instruction = 'Type your text here...'
  const sourcePlaceholderTranslation = useTranslation(instruction, "en", from)
  const targetPlaceholderTranslation = useTranslation(instruction, "en", to)

  const finalSourcePlaceholder = from === 'en' ? 'Type your text here...' : sourcePlaceholderTranslation;
  const finalTargetPlaceholder = to === 'en' ? 'Type your text here...' : targetPlaceholderTranslation;

  // clear btn
  function handleClearBtn() {
    setSentence("");
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="w-full p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg">



          <InputBox
            label="Source Language"
            sentence={sentence}
            onSentenceChange={(newSent) => setSentence(newSent)}
            selectLanguage={from}
            onLangChange={(lang) => {
              if(sentence) {
                fetch(`https://api.mymemory.translated.net/get?q=${sentence}&langpair=${from}|${lang}`)
                .then(res => res.json())
                .then(res => {
                  if(res.responseData){
                    setSentence(res.responseData.translatedText)
                  }
                })
                .catch(err => console.log('Error changing source text language: ', err))
              }

              setFrom(lang);
            }}
            languageOptions={Object.entries(LANGUAGE_OPTIONS)}
            placeholder={finalSourcePlaceholder || "Translating Placeholder..."}
          />

          <hr className="my-2 text-gray-300" />

          <InputBox
            label="Target Language"
            isDisabled
            color="bg-gray-100"
            sentence={result}
            selectLanguage={to}
            onLangChange={(lang) => {
              setTo(lang)
            }}
            languageOptions={Object.entries(LANGUAGE_OPTIONS)}
            placeholder={finalTargetPlaceholder || "Translating placeholder..."}
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

      </div>
    </div>
  );
}

export default FinalBox;
