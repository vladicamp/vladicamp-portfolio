export default function Services() {
    return (
        <section id="services">
            <div className="section-header">
                <div>
                    <div className="section-label">What I Do</div>
                    <h2 className="section-title">Services <em>tailored</em>to your needs</h2>
                </div>
                <a href="mailto:vladimircampos81@gmail.com" className="link-arrow">Discuss a project →</a>
            </div>
            <div className="services-grid">
                <div className="service-card">
                    <div className="service-num">01</div>
                    <div className="service-icon">🎨</div>
                    <div className="service-name">WordPress Development</div>
                    <p className="service-desc">Custom WordPress sites built from scratch — tailored themes, plugins, and CMS setups that are fast, secure, and easy to manage.</p>
                    <div className="service-tags">
                        <span className="tag">Custom Themes</span>
                        <span className="tag">WooCommerce</span>
                        <span className="tag">ACF</span>
                        <span className="tag">Gutenberg</span>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-num">02</div>
                    <div className="service-icon">⚡</div>
                    <div className="service-name">Frontend Development</div>
                    <p className="service-desc">Pixel-perfect, responsive interfaces built with modern HTML, CSS, and JavaScript — smooth animations included.</p>
                    <div className="service-tags">
                        <span className="tag">HTML / CSS</span>
                        <span className="tag">JavaScript</span>
                        <span className="tag">Responsive</span>
                        <span className="tag">Animations</span>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-num">03</div>
                    <div className="service-icon">🚀</div>
                    <div className="service-name">Performance & SEO</div>
                    <p className="service-desc">Speed optimizations, Core Web Vitals improvements, and on-page SEO strategies that push your site to the top of search results.</p>
                    <div className="service-tags">
                        <span className="tag">Page Speed</span>
                        <span className="tag">Core Web Vitals</span>
                        <span className="tag">On-Page SEO</span>
                    </div>
                </div>
            </div>
        </section>
    )
}