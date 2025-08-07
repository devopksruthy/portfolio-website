import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full bg-cyan-800 text-white">
            <nav className="w-full">
                <div className="w-full flex flex-1 items-center justify-between p-4">
                    <p className="W-32 cursor-pointer hover:font-bold">
                        <Link href="/">Portfolio</Link>
                    </p>
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
                            <Link href="/faq">FAQ</Link>
                        </li>
                        <li className="inline mr-5 cursor-pointer hover:font-bold  hover:text-white hover:underline">
                            <Link href="/contact-us">Contact us</Link>
                        </li>
                    </ul>
                    <button type="button" className="border-1 border-solid px-4 py-2 rounded-md cursor-pointer">
                        <Link href="#home">Login</Link>
                    </button>
                </div>
            </nav>
        </div>
    );
}