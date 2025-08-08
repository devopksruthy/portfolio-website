import Image from "next/image";
import Link from "next/link";

export default function LandingPage () {
    return(
        
         <div className="grid md:grid-cols-2 items-center h-[90vh]">
            <div className="p-2 order-2 md:order-none">
                <h2 className="text-2xl">Hey, I&apos;m Sruthy</h2>
                <h1 className="font-bold text-6xl md:text-8xl">
                    <span className="text-cyan-800">Front</span>end Developer
                </h1>
                <p className="mt-8 text-2xl">
                    I&apos;m a frontend developer. I&apos;ll help you build beautiful websites your users will love.
                </p>
                <div className="mt-8">
                    <button type="button" className="bg-cyan-800 text-white rounded-md p-4 mr-3">
                        <Link href="/contact-us">Get in touch</Link>
                    </button>
                    <button type="button" className="border-1 border-solid border-cyan-800 text-cyan-800 rounded-md p-4">
                        <Link href="/projects">Browse More</Link>
                    </button>
                </div>
            </div>
            <div className=" order-1 md:order-none">
                <Image width={800} height={800} src="/profile.webp" alt="profile image"/>
            </div>
        </div>
    )
}