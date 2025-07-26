import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

type UserInputProps = {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
    setLetters: React.Dispatch<React.SetStateAction<{ id: string; char: string; left: number; duration: number }[]>>,
}

const UserInput = ({text, setText, setLetters}: UserInputProps) => {

// Change event for LetterRain component
const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const lastChar = value.slice(-1);

    if (lastChar) {
        const newLetter = {

        id: Date.now().toString(),
        char: lastChar,
        left: Math.random() * 90,
        duration: Math.random() * 2,

    };

    setLetters((prev) => [...prev, newLetter])

    }
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