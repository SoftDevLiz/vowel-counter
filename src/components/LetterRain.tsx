import type { Letter } from "@/App";

const LetterRain = ({ letters }: { letters: Letter[] }) => {

    return (
        <>
            {letters.map(({ id, char, left, duration }) => (
                <div
                key={id}
                className="absolute top-0 text-white text-3xl animate-fall"
                style={{
                    left: `${left}%`,
                    animationDuration: `${duration}s`,
                }}
                >
                {char}
                </div>
            ))}
        </>
    );
}

export default LetterRain;

