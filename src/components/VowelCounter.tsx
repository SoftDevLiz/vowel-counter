
const vowels = ['a', 'e', 'i', 'o', 'u']

type VowelCounterProps = {
    string: string,
}

const VowelCounter = ({string}: VowelCounterProps) => {

const lowerCaseString = string.toLowerCase();
let count = 0;

for (const letter of lowerCaseString) {
    if (vowels.includes(letter)) {
        count++;
    }
}

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
};

export default VowelCounter;
