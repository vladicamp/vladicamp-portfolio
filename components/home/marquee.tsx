export default function Marquee() {
    return (
        <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--bg2)] py-[18px]">
            <div className="marquee-track flex w-max gap-0 [animation:marquee_22s_linear_infinite]" id="marqueeTrack">
                <span className="marquee-item">WordPress <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">Frontend Development <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">WooCommerce <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">Custom Themes <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">JavaScript <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">UI / UX <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">SEO <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">Responsive Design <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">PHP <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">Page Speed Optimization <span className="marquee-dot">✦</span></span>
                {/* duplicate for seamless loop */}
                <span className="marquee-item">WordPress <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">Frontend Development <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">WooCommerce <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">Custom Themes <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">JavaScript <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">UI / UX <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">SEO <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">Responsive Design <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">PHP <span className="marquee-dot">✦</span></span>
                <span className="marquee-item">Page Speed Optimization <span className="marquee-dot">✦</span></span>
            </div>
        </div>
    )
}