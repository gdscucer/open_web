import GitHub from "../assets/github.svg";
import Code from "../assets/code.svg";
import Card from "../assets/credit-card.svg"

export const NavBar = () => {
    const githubURL = "https://github.com/gdscucer/open_web";
    const paypalme = "https://www.paypal.com/donate/?business=8BYY4DHE4C5LE&no_recurring=0&currency_code=EUR";

    return (
        <div className="bg-white text-black shadow-sm">
            <div className="container mx-auto">
                <div className="flex justify-between items-center px-4 lg:px-0">
                    <div className="text-lg">
                        <a href="/" className="font-bold">
                            <span>Blue</span>
                            <span className="text-blue-800">Note</span>
                        </a>
                    </div>

                    <div className="flex justify-start items-center gap-x-6">
                        <a href={githubURL} target="_blank" className="inline-block py-4">
                            <img src={GitHub} alt="github icon" className="h-4 w-4 hover:scale-125 ease-in-out duration-300" />
                        </a>
                        <a href={paypalme} target="_blank" className="inline-block py-4">
                            <img src={Card} alt="paypal me" className="h-4 w-4 hover:scale-125 ease-in-out duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}