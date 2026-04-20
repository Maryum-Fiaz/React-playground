import { useEffect, useState } from "react"


function useTranslation(text, from, to) {
    let [data, setData] = useState("")

    useEffect(() => {
        if(text === ""){
            setData("");
            return;
        }

        fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`)
        .then((res) => res.json())
        .then(res => {
            if(res.responseData){
                setData(res.responseData.translatedText)
            }
        })
        .catch(err => console.log('Translation Error: ', err))
        

    }, [text, to, from])

    console.log('translation data: ', data);
    
    return data;
}

export default useTranslation;