import VowelCounter from "./components/VowelCounter"
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
        <VowelCounter 
        string="yeahhhs"
        />
      </div>

    </>
  )
}

export default App

// TODO:
// I want it to live update as you type :)
// 1. Abstract counter component...
// 2. Create counter functionality
// 3. Create reset button
// 4. Make it mobile friendly
// 5. Style the front end!
// Bonus: How do we make a cool animation as it counts while you type? I'm thinking a black background and big white letters that spreads over the page
// what would be REALLY cool if the letters were from what the user has typed... so as you type the letters start creeping onto the page from the bottom up
// and as you delete them they dissapear from the page.