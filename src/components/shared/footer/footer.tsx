import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li><Link href="/about-us" className="hover:underline">About us</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/contact-us" className="hover:underline">Contact us</Link></li>            
          </ul>
        </nav>
      </div>
    </footer>
  );
}
