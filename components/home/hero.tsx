import Image from 'next/image';


export default function Hero() {
    return (
        <section id="hero" className="relative grid min-h-svh grid-cols-1 lg:grid-cols-2 overflow-hidden pt-[88px]">
            <div className="relative z-[2] flex flex-col justify-center py-20 px-8 pb-12 md:px-16 md:pb-16;">
                <div className="fade-in">Available for projects</div>
                <h1 className="mb-7 font-display text-[clamp(2.8rem,5vw,4.5rem)] font-black leading-[1.05] tracking-tight text-white fade-in delay-1">
                    WordPress<br /><em className="italic text-[var(--accent2)]">&amp; Frontend</em><br />Developer
                </h1>
                <p className="mb-12 max-w-[440px] text-base font-light leading-[1.75] text-[var(--muted)] fade-in delay-2">
                    Building fast, beautiful, and conversion-focused websites that help businesses stand out — with 10+ years of
                    hands-on experience.
                </p>
                <div className="flex items-center gap-5 fade-in delay-3">
                    <a href="#work" className="btn-primary">View My Work ↓</a>
                    <a href="mailto:vladimircampos81@gmail.com" className="btn-outline">Get in touch</a>
                </div>
                <div className="flex gap-6 lg:gap-10 border-t border-[var(--border)] mt-16 pt-10 fade-in delay-4">
                    <div>
                        <div className="stat-num">10<span>+</span></div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div>
                        <div className="stat-num">50<span>+</span></div>
                        <div className="stat-label">Projects Delivered</div>
                    </div>
                    <div>
                        <div className="stat-num">100<span>%</span></div>
                        <div className="stat-label">Client Satisfaction</div>
                    </div>
                </div>
            </div>

            <div className="relative block h-[100vw] lg:h-auto overflow-hidden">
                <div className="relative flex size-full items-center justify-center bg-[linear-gradient(135deg,#1a1a1a_0%,#0d0d0d_100%)]">
                    <div className="hero-geo"></div>
                    <div className="hero-geo size-[500px]"></div>
                    <div className="hero-geo size-[680px]"></div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Image className="w-full" src="/vladicamp-light-logo-512.avif" alt="vladicamp logo" width={1000} height={1000} />
                    </div>
                </div>
                <div className="absolute bottom-12 left-10 z-[3] flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 backdrop-blur-[12px]">
                    <div className="text-[1.4rem]">📍</div>
                    <div>
                        <div className="text-[0.78rem] text-[var(--muted)]">Based in</div>
                        <div className="text-[0.9rem] font-medium text-[var(--text)]">Manila, Philippines</div>
                    </div>
                </div>
            </div>
        </section>
    );
}