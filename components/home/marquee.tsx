const marqueeItems = [
    {
        id: "item-1",
        tech: "WordPress",
        name: "WordPress"
    },
    {
        id: "item-2",
        tech: "Frontend Development",
        name: "Frontend Development"
    },
    {
        id: "item-3",
        tech: "WooCommerce",
        name: "WooCommerce"
    },
    {
        id: "item-4",
        tech: "Custom Themes",
        name: "Custom Themes"
    },
    {
        id: "item-5",
        tech: "JavaScript",
        name: "JavaScript"
    },
    {
        id: "item-6",
        tech: "UI / UX",
        name: "UI / UX"
    },
    {
        id: "item-7",
        tech: "SEO",
        name: "SEO"
    },
    {
        id: "item-8",
        tech: "Responsive Design",
        name: "Responsive Design"
    },
    {
        id: "item-9",
        tech: "PHP",
        name: "PHP"
    },
    {
        id: "item-10",
        tech: "Page Speed Optimization",
        name: "Page Speed Optimization"
    },
]

export default function Marquee() {
    return (
        <section className="overflow-hidden border-y border-[var(--border)] bg-[var(--bg2)] py-[18px]">
            <div className="marquee-track flex w-max gap-0 [animation:marquee_22s_linear_infinite]" id="marqueeTrack">
                {marqueeItems.map( (item) => {
                    return(
                        <div key={item.id} className="flex items-center gap-[18px] whitespace-nowrap px-9 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">{item.tech} <span className="text-[1.2rem] text-[var(--accent)]">✦</span></div>
                    )
                })}
                {/* duplicate for seamless loop */}
                {marqueeItems.map( (item) => {
                    return(
                        <div key={item.id} className="flex items-center gap-[18px] whitespace-nowrap px-9 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">{item.tech} <span className="text-[1.2rem] text-[var(--accent)]">✦</span></div>
                    )
                })}
            </div>
        </section>
    )
}