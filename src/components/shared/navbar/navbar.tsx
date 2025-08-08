import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full bg-cyan-800 text-white">
            <nav className="w-full">
                <div className="w-full flex flex-1 items-center justify-evenly p-4">


                    <div className="flex items-center gap-2">
                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-white rounded-full dark:bg-white">
                            <span className="font-medium text-cyan-800 dark:text-cyan-800">S</span>
                        </div>
                        <p className="W-32 cursor-pointer font-bold">
                            <Link href="/">Sruthy</Link>
                        </p>
                    </div>

                    <ul>
                        <li className="inline mr-5 cursor-pointer hover:font-bold  hover:text-white hover:underline">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="inline mr-5 cursor-pointer hover:font-bold  hover:text-white hover:underline">
                            <Link href="/about-us">About us</Link>
                        </li>
                        <li className="inline mr-5 cursor-pointer hover:font-bold  hover:text-white hover:underline">
                            <Link href="/projects">Projects</Link>
                        </li>

                        <li className="inline mr-5 cursor-pointer hover:font-bold  hover:text-white hover:underline">
                            <Link href="/contact-us">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}