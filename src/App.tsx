import VowelCounter from "./components/VowelCounter"
import "./tailwind.css"
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col min-h-screen items-center justify-evenly px-4 sm:px-8">
      <Header />
      <VowelCounter text={text}/>
      <UserInput text={text} setText={setText} />
    </div>
  )
}

export default App

// TODO:
// Abstract components for cleanliness
// Typing animation...
// Styling