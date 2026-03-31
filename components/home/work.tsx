import { getProjects, getProjectTechTags } from '@/lib/wordpress';

export default async function Work() {
    let projects = await getProjects().catch(() => []);
    console.log('projects', projects);

    return (
        <section id="work">
            <div className="section-header">
                <div>
                    <div className="section-label">Portfolio</div>
                    <h2 className="section-title"><em>Selected</em> work</h2>
                </div>
                <a href="https://vladicamp.com/portfolio/" target="_blank" className="link-arrow">
                    See all projects →
                </a>
            </div>

            <div className="work-grid">
                {projects.length === 0 ? (
                    <p className="work-empty">No projects found.</p>
                ) : (
                    projects.map((project) => {
                        const tags = getProjectTechTags(project);
                        const tagLabel = tags.map((t) => t.name).join(' · ');
                        const liveUrl = project.acf?.live_url || 'https://vladicamp.com/portfolio/';
                        const thumbUrl = project.acf?.featured_image_url;

                        return (
                            <a
                                key={project.id}
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="work-card"
                            >
                                <div className="work-thumb">
                                    <div className="work-thumb-inner">
                                        {thumbUrl ? (
                                            <img
                                                src={thumbUrl}
                                                alt={project.title.rendered}
                                                className="work-thumb-img"
                                            />
                                        ) : (
                                            <div className="work-thumb-placeholder">
                                                {project.title.rendered}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="work-info">
                                    {tagLabel && (
                                        <div className="work-cat">{tagLabel}</div>
                                    )}
                                    <div
                                        className="work-title"
                                        dangerouslySetInnerHTML={{ __html: project.title.rendered }}
                                    />
                                    <div
                                        className="work-desc"
                                        dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}
                                    />
                                </div>
                            </a>
                        );
                    })
                )}
            </div>
        </section>
    );
}