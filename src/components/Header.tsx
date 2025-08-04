const Header = () => {
    return (
        <div className="flex flex-col items-center gap-4 sm:gap-6 text-center font-concertone">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Vowel Counter</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl">Enter your text below</h2>
        </div>
    );
};

export default Header;