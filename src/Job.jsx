import TechTag from "./TechTag";

function Job({ job, index }) {
    return (
        <article aria-labelledby={`job-title-${index}`} aria-label={`Job at ${job.name}`} className="bg-palette-secondary/20 border border-palette-secondary shadow-md shadow-palette-border-glow/60 rounded-[10px] w-full flex flex-col justify-center items-center py-5 px-5">
            <div className="w-full">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 id={`job-title-${index}`} className="text-palette-text text-2xl leading-none">{job.name}</h3>
                        <p className="text-palette-text text-lg leading-none">{job.position}</p>
                        <p className="text-palette-text text-lg leading-none">{job.location}</p>
                        <p className="text-palette-text text-lg group-hover:text-palette-text transition duration-200 leading-none">{job.date}</p>
                    </div>

                    <p className="text-palette-text text-sm leading-relaxed py-2">
                        {job.description}
                    </p>

                    <ul aria-label="Technology stack" className="flex flex-wrap gap-2 list-none p-0 m-0"> {
                        job.stack.map((tech, stackIndex) => {
                            return (
                                <li key={stackIndex}>
                                    <TechTag text={tech} />
                                </li>
                            )
                        })
                    }
                    </ul>

                    {
                        job.link &&
                        <div className="flex flex-wrap gap-2">
                            <a aria-label={`Visit ${job.name} website`}  href={job.link} target="_blank" rel="noopener noreferrer" className="text-palette-text px-2 py-2 bg-palette-primary hover:bg-palette-secondary/50 border border-palette-secondary shadow-md shadow-palette-border-glow/60 rounded-[6px] transition duration-200 ease-in-out select-none leading-none">
                                Website
                            </a>
                        </div>
                    }
                </div>
            </div>
        </article>
    );
}

export default Job;