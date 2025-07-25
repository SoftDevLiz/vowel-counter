import { useState } from "react";
import VowelCounter from "./components/VowelCounter"
import { Textarea } from "./components/ui/textarea"
import "./tailwind.css"
import { Button } from "./components/ui/button";

function App() {
const [text, setText] = useState("");

  return (
    <div className="flex flex-col min-h-screen items-center justify-evenly px-4 sm:px-8">
      <div className="flex flex-col items-center gap-3 sm:gap-5 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl">Vowel Counter</h1>
        <h2 className="text-lg sm:text-xl">Enter your text below</h2>
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl text-center break-words max-w-[90vw]">
        <VowelCounter 
        string={text}
        />
      </div>
      <div className="flex flex-col items-center gap-4 sm:gap-5 w-full max-w-md">
          <Textarea 
            placeholder="start typing..." 
            value={text} 
            onChange={event => setText(event.target.value)}
            className="w-full" 
          />
          <Button onClick={() => setText("")}>Clear</Button>
      </div>
    </div>
  )
}

export default App

// TODO:
// Center the app on the page screen
// We want the number in the middle and the input/reset button below