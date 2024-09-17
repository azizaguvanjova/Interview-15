import React, { useState, useEffect } from "react";

function App() {
  return <WordByWord />;
}

const WordByWord = () => {
  // KODUNUZ BURAYA GELECEK
  const [inputText,setInputText] = useState("")
  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [words, setWords] = useState([])

  const handleInputChange = (e) => {
    setInputText(e.target.value)
    setWordIndex(0)
    setDisplayText("")
    setWords(e.target.value.split(" "))
  }

  useEffect(()=>{
    if (wordIndex < words.length) {
      const interval = setInterval(()=>{
        setDisplayText((prevText) => prevText +" "+ words[wordIndex])
        setWordIndex((prevIndex) => prevIndex +1)
      },500)
      return () => clearInterval(interval)
    }
  },[wordIndex,words])

  return (
    <div className="text-center text-black">
      <input type="text"
      value={inputText}
      onChange={handleInputChange}
      placeholder="metni buraya gırın"
      className="border p-2 mt-32 border-pink-900  rounded
      bg-pink-400 hover:bg-pink-600"
      />
      <p className="mt-34">{displayText}</p>
    </div>
  )
};

export default App;
