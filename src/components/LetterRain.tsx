import type { Letter } from "@/App";

const LetterRain = ({ letters }: { letters: Letter[] }) => {

    // Array of super vibrant colors for the letters
    const colors = [
        '#FF1744', // Bright Red
        '#00E676', // Bright Green
        '#2196F3', // Bright Blue
        '#FF9800', // Bright Orange
        '#E040FB', // Bright Purple
        '#FFEB3B', // Bright Yellow
        '#00BCD4', // Bright Cyan
        '#FF5722', // Deep Orange
        '#9C27B0', // Purple
        '#4CAF50', // Green
        '#F44336', // Red
        '#3F51B5', // Indigo
        '#FFC107', // Amber
        '#009688', // Teal
        '#E91E63', // Pink
        '#673AB7', // Deep Purple
        '#FF5722', // Deep Orange
        '#795548', // Brown
        '#607D8B', // Blue Grey
        '#FF4081', // Pink
    ];

    return (
        <>
            {letters.map(({ id, char, left, duration }) => {
                // Generate a random color for each letter
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                
                return (
                    <div
                    key={id}
                    className="absolute top-0 text-3xl animate-fall z-0"
                    style={{
                        left: `${left}%`,
                        animationDuration: `${duration}s`,
                        color: randomColor,
                    }}
                    >
                    {char}
                    </div>
                );
            })}
        </>
    );
}

export default LetterRain;

