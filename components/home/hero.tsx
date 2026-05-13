import Image from 'next/image';


export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-left">
                <div className="hero-badge fade-in">Available for projects</div>
                <h1 className="hero-title fade-in delay-1">
                    WordPress<br /><em>&amp; Frontend</em><br />Developer
                </h1>
                <p className="hero-subtitle fade-in delay-2">
                    Building fast, beautiful, and conversion-focused websites that help businesses stand out — with 10+ years of
                    hands-on experience.
                </p>
                <div className="hero-actions fade-in delay-3">
                    <a href="#work" className="btn-primary">View My Work ↓</a>
                    <a href="mailto:vladimircampos81@gmail.com" className="btn-outline">Get in touch</a>
                </div>
                <div className="hero-stats fade-in delay-4">
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

            <div className="hero-right">
                <div className="hero-placeholder">
                    <div className="hero-geo"></div>
                    <div className="hero-geo"></div>
                    <div className="hero-geo"></div>
                    <div className="hero-profile-image">
                        <Image src="/vladicamp-light-logo-512.avif" alt="vladicamp logo" width={1000} height={1000} />
                    </div>
                </div>
                <div className="hero-tag">
                    <div className="hero-tag-icon">📍</div>
                    <div>
                        <div className="hero-tag-text">Based in</div>
                        <div className="hero-tag-val">Manila, Philippines</div>
                    </div>
                </div>
            </div>
        </section>
    );
}