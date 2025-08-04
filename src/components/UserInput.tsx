import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useRef } from 'react';

type UserInputProps = {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
    setLetters: React.Dispatch<React.SetStateAction<{ id: string; char: string; left: number; duration: number }[]>>,
}

const UserInput = ({text, setText, setLetters}: UserInputProps) => {
    const prevTextRef = useRef(text);

// Change event for LetterRain component
const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const prevText = prevTextRef.current;
    
    // Only create a letter if the text is growing (new character added)
    if (value.length > prevText.length) {
        const newChar = value.slice(prevText.length);
        
        if (newChar) {
            const newLetter = {
                id: Date.now().toString(),
                char: newChar,
                left: Math.random() * 90,
                duration: Math.random() * 8 + 4, 
            };

            setLetters((prev) => [...prev, newLetter]);
        }
    }
    
    // Update the previous text reference
    prevTextRef.current = value;
}

    return (
        <div className="flex flex-col items-center gap-5 sm:gap-6 w-full max-w-lg">
            <Textarea 
                placeholder="start typing..." 
                value={text} 
                onChange={event => {
                    setText(event.target.value);
                    handleChange(event);
                }}
                className="w-full" 
            />
            <Button onClick={() => setText("")} className='font-concertone bg-teal-700 hover:bg-teal-600'>Clear</Button>
        </div>
    )
}

export default UserInput;