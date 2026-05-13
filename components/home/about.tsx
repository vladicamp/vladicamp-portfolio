import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 bg-[var(--bg)]">
            <div className="relative w-full md:w-1/2">
                <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg3)]">
                    <Image src="/vladicamp-profile.avif" alt="vladicamp profile" width={1000} height={1000} />
                </div>
                <div className="absolute -bottom-5 -right-5 flex size-[140px] flex-col items-center justify-center gap-1 rounded-2xl bg-[var(--accent)]">
                    <div className="font-display text-[2.8rem] font-black leading-none text-black">10+</div>
                    <div className="text-[0.7rem] font-semibold uppercase tracking-wide text-black/65">Yrs. Exp.</div>
                </div>
            </div>
            <div className="about-content w-full md:w-1/2 ">
                <div className="section-label">About Me</div>
                <h2 className="section-title">A website that leaves<br /><em>a lasting impression</em></h2>
                <p className="about-text">Hi, I'm <strong>Vlad</strong> — a freelance WordPress and frontend developer based in
                    Manila, Philippines. I craft fast, pixel-perfect websites that help businesses grow
                    online.</p>
                <p className="about-text">I'm passionate about clean code, great design, and making the web a better-looking place —
                    one project at a time.</p>
                <div className="mt-10">
                    <div className="mb-4 text-xs uppercase tracking-[0.1em] text-[var(--muted)]">Tech I work with</div>
                    <div className="flex flex-wrap gap-2.5">
                        <span className="skill-pill">WordPress</span>
                        <span className="skill-pill">Shopify</span>
                        <span className="skill-pill">Next.js</span>
                        <span className="skill-pill">PHP</span>
                        <span className="skill-pill">HTML5</span>
                        <span className="skill-pill">CSS3</span>
                        <span className="skill-pill">JavaScript</span>
                        <span className="skill-pill">WooCommerce</span>
                        <span className="skill-pill">Elementor</span>
                        <span className="skill-pill">ACF</span>
                        <span className="skill-pill">Git</span>
                        <span className="skill-pill">SEO</span>
                    </div>
                </div>
                <div className="mt-9 flex flex-col gap-2.5">
                    <div className="about-contact-row"><strong>Email</strong> <a
                        href="mailto:vladimircampos81@gmail.com">vladimircampos81@gmail.com</a></div>
                    <div className="about-contact-row"><strong>Mobile</strong> <a href="tel:+639219055107">(+63) 921 905 5107</a></div>
                    <div className="about-contact-row"><strong>WhatsApp</strong> <a href="https://wa.me/639068053669"
                        target="_blank">+63 906 805 3669</a></div>
                </div>
            </div>
        </section>
    )
}