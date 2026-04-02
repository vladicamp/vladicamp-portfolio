import { getWorks, getWorkTechTags, getWorkThumbnail } from '@/lib/wordpress';
import Image from 'next/image';
import Link from 'next/link';

export default async function Work() {
    const works = await getWorks().catch(() => []);
    console.log(works);
    return (
        <section id="work">
            <div className="section-header">
                <div>
                    <div className="section-label">Portfolio</div>
                    <h2 className="section-title"><em>Selected</em> work</h2>
                </div>
                <Link href="https://vladicamp.com/portfolio/" target="_blank" className="link-arrow">
                    See all projects →
                </Link>
            </div>

            <div className="work-grid">
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
                                className="work-card"
                            >
                                <div className="work-thumb">
                                    <div className="work-thumb-inner">
                                        {thumbUrl ? (
                                            <Image
                                                src={thumbUrl}
                                                alt={work.title}
                                                className="work-thumb-img"
                                                width={500}
                                                height={500}
                                                loading="eager"
                                            />
                                        ) : (
                                            <div className="work-thumb-placeholder">
                                                {work.title}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="work-info">
                                    {tagLabel && (
                                        <div className="work-cat">{tagLabel}</div>
                                    )}
                                    {/* title & excerpt are plain strings from GraphQL — dangerouslySetInnerHTML */}
                                    {/* is still fine here if WP content contains HTML entities                  */}
                                    <div
                                        className="work-title"
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