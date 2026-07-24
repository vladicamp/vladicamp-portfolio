import Link from 'next/link';

const serviceItems = [
    {
        id: "item-1",
        num: "01",
        icon: "🎨",
        name: "WordPress Development",
        desc: "Custom WordPress sites built from scratch — tailored themes, plugins, and CMS setups that are fast, secure, and easy to manage.",
        tags: [ 
            "Custom Themes",
            "WooCommerce",
            "ACF",
            "Gutenberg",
        ]
    },
    {
        id: "item-2",
        num: "02",
        icon: "⚡",
        name: "Frontend Development",
        desc: "Pixel-perfect, responsive interfaces built with modern HTML, CSS, and JavaScript — smooth animations included.",
        tags: [ 
            "HTML / CSS",
            "JavaScript",
            "Responsive",
            "Animations",
        ]
    },
    {
        id: "item-3",
        num: "03",
        icon: "🚀",
        name: "Performance & SEO",
        desc: "Speed optimizations, Core Web Vitals improvements, and on-page SEO strategies that push your site to the top of search results.",
        tags: [ 
            "Cache",
            "Page Speed",
            "Core Web Vitals",
            "On-Page SEO",
        ]
    },
]

export default function Services() {
    return (
        <section id="services" className="bg-[var(--bg)">
            <div className="section-header">
                <div>
                    <div className="section-label">What I Do</div>
                    <h2 className="section-title">Services <em>tailored</em> to your needs</h2>
                </div>
                <Link href="mailto:vladimircampos81@gmail.com" className="link-arrow">Discuss a project →</Link>
            </div>
            <div className="services-grid grid grid-cols-1 lg:grid-cols-3 gap-0.5">
                { serviceItems.map( (serviceItem) => {
                    return(
                        <div key={serviceItem.id} className="service-card">
                            <div className="pointer-events-none absolute right-[30px] top-5 font-display text-[4rem] font-black leading-none text-white/[0.04]">{serviceItem.num}</div>
                            <div className="mb-7 flex size-12 items-center justify-center rounded-xl border border-[rgba(200,240,74,0.2)] bg-[rgba(200,240,74,0.1)] text-[1.3rem]">{serviceItem.icon}</div>
                            <div className="mb-3.5 font-display text-2xl font-bold">{serviceItem.name}</div>
                            <p className="text-[0.9rem] font-light leading-[1.7] text-[var(--muted)]">{serviceItem.desc}</p>
                            <div className="mt-7 flex flex-wrap gap-2">
                                {serviceItem.tags.map((tag) => {
                                    return(
                                        <span className="rounded-[50px] border border-[var(--border)] bg-white/[0.05] px-3 py-1 text-[0.72rem] tracking-[0.04em] text-[var(--muted)]">{tag}</span>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}