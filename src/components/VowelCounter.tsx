
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
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center break-words max-w-[90vw] font-concertone">
            <h1>{count}</h1>
        </div> 
    )
};

export default VowelCounter;
