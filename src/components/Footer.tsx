import { LucideMail } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText("lizmouton1@gmail.com");
            toast.success("Email copied to clipboard");
        } catch {
            toast.error("Something went wrong, please shoot me an email so I can fix it!");
        }
    }
    
    return (
        <div className="flex justify-center text-white gap-2 bg-transparent py-4 cursor-pointer" onClick={handleClick}>
        <LucideMail />
        <h1>lizmouton1@gmail.com</h1>
    </div>
    )
}

export default Footer;
