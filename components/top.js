import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if(window.pageYOffset > 100){
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
    }, []);
    const scrollTop = () => {
        window.scrollTo({top:0, behavior:'smooth'})
        }

return isVisible ? (<button onClick={scrollTop} className="fixed bottom-5 right-5 p-2 text-white rounded-full bg-black hover:bg-green-700 transition duration-300" aria-label="Retour en haut">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
</button>) :  null;
}

export default ScrollToTopButton;