import VowelCounter from "./components/VowelCounter"
import "./tailwind.css"
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {

  // useState for VowelCounter
  const [text, setText] = useState("");

  // useState for LetterRain
  const [letters, setLetters] = useState<{ id: string; char: string; left: number; duration: number }[]>([]);





  return (
    <div className="flex flex-col min-h-screen items-center justify-evenly px-4 sm:px-8 bg-zinc-900 text-white">
      <Header />
      <VowelCounter text={text}/>
      <UserInput text={text} setText={setText} setLetters={setLetters} />
    </div>
  )
}

export default App

// Typing animation...
// Styling