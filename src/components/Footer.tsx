import { LucideMail } from "lucide-react";

const Footer = () => {

    const handleClick = () => {
        navigator.clipboard.writeText("lizmouton1@gmail.com");
    }
    
    return (
        <div className="flex justify-center text-white gap-2 bg-transparent py-4 cursor-pointer" onClick={handleClick}>
        <LucideMail />
        <h1>lizmouton1@gmail.com</h1>
    </div>
    )
}

export default Footer;