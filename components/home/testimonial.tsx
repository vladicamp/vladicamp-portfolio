export default function Testimonial() {
    return (
        <section id="testimonials">
            <div className="section-header">
                <div>
                    <div className="section-label">Client Love</div>
                    <h2 className="section-title">What my<br /><em>clients say</em></h2>
                </div>
            </div>
            <div className="testi-grid">
                <div className="testi-card">
                    <div className="testi-stars">★★★★★</div>
                    <p className="testi-quote">Vlad is a top-notch developer who always proves to deliver. Easy to work with, efficient,
                        and always willing to learn. I hope to continue working with him into the future.</p>
                    <div className="testi-author">
                        <div className="testi-avatar">KS</div>
                        <div>
                            <div className="testi-name">Karam Sihra</div>
                            <div className="testi-role">Chief Architect, Tolado Ltd.</div>
                        </div>
                    </div>
                </div>
                <div className="testi-card">
                    <div className="testi-stars">★★★★★</div>
                    <p className="testi-quote">Working with Vlad was an absolute pleasure. He understood our brand vision immediately
                        and delivered a website that truly exceeded all our expectations.</p>
                    <div className="testi-author">
                        <div className="testi-avatar">AM</div>
                        <div>
                            <div className="testi-name">Andrea Martinez</div>
                            <div className="testi-role">CEO, Design Co.</div>
                        </div>
                    </div>
                </div>
                <div className="testi-card">
                    <div className="testi-stars">★★★★★</div>
                    <p className="testi-quote">Vlad's attention to detail is unmatched. He transformed our outdated site into a fast,
                        modern platform that our customers love. Highly recommended!</p>
                    <div className="testi-author">
                        <div className="testi-avatar">JL</div>
                        <div>
                            <div className="testi-name">James Lim</div>
                            <div className="testi-role">Founder, Aqua Tech</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}