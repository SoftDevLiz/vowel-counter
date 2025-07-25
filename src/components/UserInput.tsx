import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

type UserInputProps = {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
}

const UserInput = ({text, setText}: UserInputProps) => {

    return (
        <div className="flex flex-col items-center gap-4 sm:gap-5 w-full max-w-md">
            <Textarea 
                placeholder="start typing..." 
                value={text} 
                onChange={event => setText(event.target.value)}
                className="w-full" 
            />
            <Button onClick={() => setText("")}>Clear</Button>
        </div>
    )
}

export default UserInput;