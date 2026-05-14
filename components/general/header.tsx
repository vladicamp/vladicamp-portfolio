import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <nav className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-5 py-4 md:px-8 md:py-5 lg:py-6 lg:px-16 bg-black/85 backdrop-blur-[16px] border-b border-[#1f1f1f] transition-[padding] duration-300">
                <Link href="#hero" className="no-underline w-30">
                    <Image className="w-full" src="/vladicamp-light-logo-512.avif" alt="vladicamp logo" width={1000} height={1000} />
                </Link>
                <ul className="nav-links hidden md:flex gap-9 list-none">
                    <li><Link href="#services">Services</Link></li>
                    <li><Link href="#work">Work</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#testimonials">Clients</Link></li>
                </ul>
                <Link href="mailto:vladimircampos81@gmail.com" className="inline-block bg-[var(--accent)] text-black py-1.5 px-[22px] rounded-full text-sm font-medium no-underline tracking-wide transition-[opacity,transform] duration-200 hover:opacity-[0.85] hover:-translate-y-[1px]">Let's talk</Link>
            </nav>
        </header>
    );
}