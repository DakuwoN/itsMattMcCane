import Link from 'next/link';
import Image from 'next/image';

// Navigation bar with links and avatar
export default function Navbar() {

    return (
        <header className="border-b border-border-200 bg-background sticky top-0 z-50">
            <nav className="flex items-center justify-between px-12 py-5 max-w-7x1 mx-auto">
                <Link href="/">
                    <Image
                        src="/avatar.jpeg"
                        alt="Matthew McCane"
                        width={78}
                        height={78}
                        loading="eager"
                        className="rounded-full object-cover w-24 h-24"
                    />
                </Link>
                <ul className="flex gap-8 list-none">
                    <li><Link href="/" className="font-mono text-l tracking-widest uppercase text-muted hover:text-accent transition-colors duration-200">home</Link></li>
                    <li><Link href="/#work" className="font-mono text-l tracking-widest uppercase text-muted hover:text-accent transition-colors duration-200">work</Link></li>
                    <li><Link href="/resume" className="font-mono text-l tracking-widest uppercase text-muted hover:text-accent transition-colors duration-200">resume</Link></li>
                    <li><Link href="/books" className="font-mono text-l tracking-widest uppercase text-muted hover:text-accent transition-colors duration-200">books</Link></li>

                </ul>
            </nav>
        </header>
    )
};