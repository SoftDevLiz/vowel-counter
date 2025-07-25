import { useState } from "react";
import VowelCounter from "./components/VowelCounter"
import { Textarea } from "./components/ui/textarea"
import "./tailwind.css"
import { Button } from "./components/ui/button";

function App() {
const [text, setText] = useState("");

  return (
    <div className="flex flex-col min-h-screen items-center justify-evenly">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl">Vowel Counter</h1>
        <h2 className="text-xl">Enter your text below</h2>
      </div>
      <div className="text-5xl">
        <VowelCounter 
        string={text}
        />
      </div>
      <div className="flex flex-col items-center gap-5">
          <Textarea placeholder="start typing..." value={text} onChange={event => setText(event.target.value)} />
          <Button onClick={() => setText("")}>Clear</Button>
      </div>
    </div>
  )
}

export default App

// TODO:
// Center the app on the page screen
// We want the number in the middle and the input/reset button below