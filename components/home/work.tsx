import { getWorks, getWorkTechTags, getWorkThumbnail } from '@/lib/wordpress/home';
import Image from 'next/image';
import Link from 'next/link';

export default async function Work() {
    const works = await getWorks().catch(() => []);
    // console.log(works); 
    return (
        <section id="work" className="bg-[var(--bg2)]">
            <div className="section-header">
                <div>
                    <div className="section-label">Portfolio</div>
                    <h2 className="section-title"><em>Selected</em> work</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {works.length === 0 ? (
                    <p className="work-empty">No projects found.</p>
                ) : (
                    works.map((work) => {
                        const tags = getWorkTechTags(work);
                        const tagLabel = tags.map((t) => t.name).join(' · ');
                        const liveUrl = work.liveWorks?.liveUrl || 'https://vladicamp.com/portfolio/';
                        const thumbUrl = getWorkThumbnail(work);

                        return (
                            <Link
                                key={work.id}
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block overflow-hidden rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] bg-[var(--surface)] no-underline transition-[transform,border-color] hover:-translate-y-1.5 duration-300"
                            >
                                <div className="relative flex aspect-2/3 w-full items-center justify-center overflow-hidden bg-[var(--bg3)]">
                                    <div className="size-full transition-transform duration-500 ease-out">
                                        {thumbUrl ? (
                                            <Image
                                                src={thumbUrl}
                                                alt={work.title}
                                                className="size-full object-cover object-top"
                                                width={400}
                                                height={533}
                                                loading="eager"
                                            />
                                        ) : (
                                            <div className="flex size-full items-center justify-center font-display text-[4rem] font-black italic text-white/[0.04]">
                                                {work.title}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="px-7 pb-6 pt-7">
                                    {tagLabel && (
                                        <div className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-[var(--accent)]">{tagLabel}</div>
                                    )}
                                    {/* title & excerpt are plain strings from GraphQL — dangerouslySetInnerHTML */}
                                    {/* is still fine here if WP content contains HTML entities                  */}
                                    <div
                                        className="mb-2.5 font-display text-[1.4rem] font-bold text-[var(--text)]"
                                        dangerouslySetInnerHTML={{ __html: work.title }}
                                    />
                                </div>
                            </Link>
                        );
                    })
                )}
            </div>
        </section>
    );
}