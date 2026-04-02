import Link from 'next/link';

export default function Contact() {
    return (
        <section id="contact">
            <div className="cta-bg"></div>
            <div className="section-label">Let's Work Together</div>
            <h2 className="cta-title">Let's make your<em className='block'>website shine</em></h2>
            <p className="cta-sub">Premium WordPress development, frontend engineering, and SEO services — tailored to help your
                business stand out.</p>
            <div className="cta-actions">
                <Link href="mailto:vladimircampos81@gmail.com" className="btn-primary">Get in touch →</Link>
                <Link href="https://vladicamp.com/wp-content/uploads/2023/05/vladimir-campos-cv-1.pdf" target="_blank"
                    className="btn-outline">Download CV</Link>
            </div>
            <div className="socials">
                <Link href="https://www.facebook.com/vladicamp" target="_blank" className="social-link" title="Facebook">f</Link>
                <Link href="https://www.linkedin.com/in/vladicamp/" target="_blank" className="social-link" title="LinkedIn">in</Link>
                <Link href="https://www.instagram.com/vladicamp" target="_blank" className="social-link" title="Instagram">ig</Link>
            </div>
        </section>
    )
}