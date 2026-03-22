

export default function Header() {
    return (
        <header>
            <nav>
                <a href="#hero" className="nav-logo">Vladi<span>.</span></a>
                <ul className="nav-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#testimonials">Clients</a></li>
                </ul>
                <a href="mailto:vladimircampos81@gmail.com" className="nav-cta">Let's talk</a>
            </nav>
        </header>
    );
}