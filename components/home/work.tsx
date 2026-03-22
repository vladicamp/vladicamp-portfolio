export default function Work() {
    return (
        <section id="work">
            <div className="section-header">
                <div>
                    <div className="section-label">Portfolio</div>
                    <h2 className="section-title"><em>Selected</em> work</h2>
                </div>
                <a href="https://vladicamp.com/portfolio/" target="_blank" className="link-arrow">See all projects →</a>
            </div>
            <div className="work-grid">
                <a href="https://vladicamp.com/portfolio/" target="_blank" className="work-card">
                    <div className="work-thumb">
                        <div className="work-thumb-inner">
                            <div className="work-thumb-placeholder" style={{ background: "linear-gradient(135deg,#1c2a1a,#0d0d0d)" }}>Garbanzo
                            </div>
                        </div>
                    </div>
                    <div className="work-info">
                        <div className="work-cat">WordPress · E-commerce</div>
                        <div className="work-title">Garbanzo</div>
                        <div className="work-desc">Full WooCommerce store build with custom product pages and checkout flow.</div>
                    </div>
                </a>
                <a href="https://vladicamp.com/portfolio/" target="_blank" className="work-card">
                    <div className="work-thumb">
                        <div className="work-thumb-inner">
                            <div className="work-thumb-placeholder" style={{ background: "linear-gradient(135deg,#1a1a2a,#0d0d0d)" }}>QuadX</div>
                        </div>
                    </div>
                    <div className="work-info">
                        <div className="work-cat">WordPress · Corporate</div>
                        <div className="work-title">QuadX</div>
                        <div className="work-desc">Corporate landing page with custom WordPress theme and advanced animations.</div>
                    </div>
                </a>
                <a href="https://vladicamp.com/portfolio/" target="_blank" className="work-card">
                    <div className="work-thumb">
                        <div className="work-thumb-inner">
                            <div className="work-thumb-placeholder" style={{ background: "linear-gradient(135deg,#1a2526,#0d0d0d)" }}>Aqua Tech
                            </div>
                        </div>
                    </div>
                    <div className="work-info">
                        <div className="work-cat">Frontend · Branding</div>
                        <div className="work-title">Aqua Tech</div>
                        <div className="work-desc">Brand website featuring immersive scroll animations and a fluid layout.</div>
                    </div>
                </a>
                <a href="https://vladicamp.com/portfolio/" target="_blank" className="work-card">
                    <div className="work-thumb">
                        <div className="work-thumb-inner">
                            <div className="work-thumb-placeholder" style={{ background: "linear-gradient(135deg,#28201a,#0d0d0d)" }}>Rosenthal
                            </div>
                        </div>
                    </div>
                    <div className="work-info">
                        <div className="work-cat">WordPress · Lifestyle</div>
                        <div className="work-title">Rosenthal Tee</div>
                        <div className="work-desc">E-commerce fashion site with custom product configurator and SEO-ready architecture.
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}