
const vowels = ['a', 'e', 'i', 'o', 'u']

type VowelCounterProps = {
    text: string,
}

const VowelCounter = ({text}: VowelCounterProps) => {

const lowerCaseText = text.toLowerCase();
let count = 0;

for (const letter of lowerCaseText) {
    if (vowels.includes(letter)) {
        count++;
    }
}

    return (
        <div className="text-3xl sm:text-4xl md:text-5xl text-center break-words max-w-[90vw] font-concertone">
            <h1>{count}</h1>
        </div> 
    )
};

export default VowelCounter;
