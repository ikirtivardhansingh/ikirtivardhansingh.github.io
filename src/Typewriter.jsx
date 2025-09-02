import { useState, useEffect } from "react";

export default function Typewriter({ words, speed = 1500 }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let currentWord = words[index];
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(currentWord.slice(0, i + 1));
      i++;
      if (i === currentWord.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
        }, speed);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index, words, speed]);

  return <span style={{ color: "#f39c12", fontWeight: "bold" }}>{displayed}</span>;
}
