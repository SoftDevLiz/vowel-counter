import VowelCounter from "./components/VowelCounter"
import "./tailwind.css"
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import LetterRain from "./components/LetterRain";
import Footer from "./components/Footer";

export type Letter = {
  id: string;
  char: string;
  left: number;
  duration: number;
}

function App() {

  // useState for VowelCounter
  const [text, setText] = useState("");

  // useState for LetterRain
  const [letters, setLetters] = useState<Letter[]>([]);

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <LetterRain letters={letters} />
      </div>
      <div className="flex flex-col flex-1 items-center justify-evenly px-4 sm:px-8 bg-transparent text-white relative z-10">
        <Header />
        <VowelCounter text={text}/>
        <UserInput text={text} setText={setText} setLetters={setLetters} /> 
      </div>
      <div className="z-10">
        <Footer />
      </div>
    </div>
  )
}

export default App;