import { useEffect, useState } from "react"


function useTranslation(text, from, to) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`)
        .then((res) => res.json())
        .then((res) => setData(res.responseData.translatedText))

    }, [text, to, from])

    console.log('translation data: ', data);
    
    return data;
}

export default useTranslation;