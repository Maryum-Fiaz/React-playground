import { useState } from "react"


function useTranslation(text, from, to) {
    const [data, setData] = useState({})

    fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`)
    .then((res) => res.json())
    .then((res) => setData(res.responseData.translatedText))

    console.log('translation data: ', data);
    
    return data;
}

export default useTranslation;