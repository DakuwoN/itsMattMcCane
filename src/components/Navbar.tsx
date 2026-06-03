'use client'
import Link from 'next/link';
import Image from 'next/image';
import {useState} from "react";

// Navigation bar with links and avatar
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b border-border-200 bg-background sticky top-0 z-50">
            <nav className="px-6 md:px-24 lg:px-80 flex items-center justify-between py-5">
                <Link href="/">
                    <Image
                        src="/avatar.jpeg"
                        alt="Matthew McCane"
                        width={78}
                        height={78}
                        loading="eager"
                        className="rounded-full object-cover w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14"
                    />
                </Link>
                <ul className="hidden xl:flex gap-8 list-none">
                    <li><Link href="/" className="font-mono text-l tracking-widest uppercase text-muted hover:text-accent transition-colors duration-200">home</Link></li>
                    <li><Link href="/#work" className="font-mono text-l tracking-widest uppercase text-muted hover:text-accent transition-colors duration-200">work</Link></li>
                    <li><Link href="/resume" className="font-mono text-l tracking-widest uppercase text-muted hover:text-accent transition-colors duration-200">resume</Link></li>
                    <li><Link href="/books" className="font-mono text-l tracking-widest uppercase text-muted hover:text-accent transition-colors duration-200">books</Link></li>
                </ul>

                {/*Hamburger menu - mobile*/}
                <button
                    className="xl:hidden font-mono text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? 'x' : '='}
                </button>
            </nav>

            {/*Mobile dropdown menu*/}
            {isOpen && (
                <div className="xl:hidden flex flex-col px-6 pb-6 gap-4 border-b border-border bg-background">
                    <Link href="/" onClick={() => setIsOpen(false)} className="font-mono text-xs tracking-widest uppercase text-muted hover:text-accent">home</Link>
                    <Link href="/#work" onClick={() => setIsOpen(false)} className="font-mono text-xs tracking-widest uppercase text-muted hover:text-accent">work</Link>
                    <Link href="/resume" onClick={() => setIsOpen(false)} className="font-mono text-xs tracking-widest uppercase text-muted hover:text-accent">resume</Link>
                    <Link href="/books" onClick={() => setIsOpen(false)} className="font-mono text-xs tracking-widest uppercase text-muted hover:text-accent">books</Link>
                </div>
            )}
        </header>
    )
};