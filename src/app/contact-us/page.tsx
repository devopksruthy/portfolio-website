import Image from "next/image";
import Link from "next/link";
export default function ContactUs () {
    return (
        <div className="grid md:flex items-center p-4 md:p-8">
            <div className="order-2 md:order-none p-2 md:p-8 md:w-[60%]">
                <h1 className="font-bold text-6xl md:text-8xl">
                    <span className="text-cyan-800">G</span>
                    et In Touch.</h1>
                <p className="text-2xl p-3 mb-8">
                    Looking to  work together? Reach out through the form and I'll get back to you in the next 48 hours.
                </p>
                <Link href="/contact-us" className="p-3 hover:text-cyan-800 text-2xl">abc@gmail.com</Link><br/>
                <Link href="/contact-us" className="p-3 hover:text-cyan-800 text-2xl">7896541230</Link>
            </div>
             <div className="order-1 md:order-none rounded-full border-2 border-solid border-cyan-800 p-8 md:p-16 my-16 m-auto md:w-[40%]">
                           <Image width={800} height={800} src="/user.webp" alt="profile image" className="w-3xs h-3xs md:w-96 md:h-96 rounded-full"/>
                       </div>
        </div>
    )
}