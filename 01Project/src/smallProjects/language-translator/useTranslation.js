import { useEffect, useState } from "react";

function useTranslation(text, from, to) {
  const [data, setData] = useState("");

  useEffect(() => {
    let active = true;

    if (!text) {
      if (active) setData("");
      return;
    }

    const debounce = setTimeout(() => {
      fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`,
      )
        .then((res) => res.json())
        .then((res) => {
          if (!active) return;
          setData(res.responseData?.translatedText || "");
        })
        .catch((err) => console.log("Translation Error: ", err));
    }, 600);

    return () => {
      active = false;
      clearTimeout(debounce);
    };
  }, [text, to, from]);

  return data;
}

// Debounce reduces unnecessary API calls during rapid input, e.g; call on each letter
// Cleanup prevents memory leaks
// active flag ensures that outdated API responses don’t overwrite the latest state

// ** MODERN WAY : AbortController**

export default useTranslation;
