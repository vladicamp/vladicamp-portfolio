import Link from 'next/link';

export default function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden bg-[var(--bg)] px-[60px] py-[140px] text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(200,240,74,0.06)_0%,transparent_70%)]"></div>
            <div className="justify-center">Let's Work Together</div>
            <h2 className="section-title">Let's make your<em className='block italic text-[var(--accent2)]'>website shine</em></h2>
            <p className="mx-auto mb-12 max-w-[480px] text-[1.05rem] font-light leading-[1.7] text-[var(--muted)]">Premium WordPress development, frontend engineering, and SEO services — tailored to help your
                business stand out.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="mailto:vladimircampos81@gmail.com" className="btn-primary">Get in touch →</Link>
                <Link href="https://vladicamp.com/wp-content/uploads/2023/05/vladimir-campos-cv-1.pdf" target="_blank"
                    className="btn-outline">Download CV</Link>
            </div>
            <div className="mt-14 flex justify-center gap-3.5">
                <Link href="https://www.facebook.com/vladicamp" target="_blank" className="social-link" title="Facebook">f</Link>
                <Link href="https://www.linkedin.com/in/vladicamp/" target="_blank" className="social-link" title="LinkedIn">in</Link>
                <Link href="https://www.instagram.com/vladicamp" target="_blank" className="social-link" title="Instagram">ig</Link>
            </div>
        </section>
    )
}