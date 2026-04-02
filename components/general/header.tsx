import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="#hero" className="nav-logo">Vladi<span>.</span></Link>
                <ul className="nav-links">
                    <li><Link href="#services">Services</Link></li>
                    <li><Link href="#work">Work</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#testimonials">Clients</Link></li>
                </ul>
                <Link href="mailto:vladimircampos81@gmail.com" className="nav-cta">Let's talk</Link>
            </nav>
        </header>
    );
}