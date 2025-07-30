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
                duration: Math.random() * 8 + 4, // 4-12 seconds for much slower fall
            };

            setLetters((prev) => [...prev, newLetter]);
        }
    }
    
    // Update the previous text reference
    prevTextRef.current = value;
}

    return (
        <div className="flex flex-col items-center gap-4 sm:gap-5 w-full max-w-md">
            <Textarea 
                placeholder="start typing..." 
                value={text} 
                onChange={event => {
                    setText(event.target.value);
                    handleChange(event);
                }}
                className="w-full" 
            />
            <Button onClick={() => setText("")}>Clear</Button>
        </div>
    )
}

export default UserInput;