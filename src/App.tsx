import { Textarea } from "./components/ui/textarea"
import "./tailwind.css"

function App() {

  return (
    <>
      <div className="flex flex-col p-10 items-center justify-center">
        <h1 className="text-5xl">Vowel Counter</h1>
        <h2 className="text-xl p-5">Enter your text below</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
          <Textarea placeholder="start typing..." className="max-w-[250px]"/>
      </div>
      <div className="flex items-center justify-center p-10 text-5xl">
        <h1>5</h1>
      </div>

    </>
  )
}

export default App
