import TechTag from "./TechTag";

function Contribution({ contribution, index }) {
    return (
        <article aria-labelledby={`project-title-${index}`} aria-label={`Project ${contribution.name}`} className="bg-palette-secondary/20 border border-palette-secondary shadow-md shadow-palette-border-glow/60 rounded-[10px] w-full flex flex-col justify-center items-center py-5 px-5">
            <div className="w-full">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 id={`project-title-${index}`} className="text-palette-text text-2xl leading-none">{contribution.name}</h3>
                    </div>

                    <p className="text-palette-text text-sm leading-relaxed group-hover:opacity-0 transition duration-300 cursor-default select-none">{contribution.description}</p>

                    <ul aria-label="Technology stack" className="flex flex-wrap gap-2 list-none p-0 m-0"> {
                        contribution.stack.map((tech, stackIndex) => {
                            return (
                                <li key={stackIndex}>
                                    <TechTag text={tech} />
                                </li>
                            )
                        })
                    }
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {
                            contribution.link &&
                            <a aria-label={`Visit ${contribution.name} website`} href={contribution.link} target="_blank" rel="noopener noreferrer" className="text-palette-text px-2 py-2 bg-palette-primary hover:bg-palette-secondary/50 border border-palette-secondary shadow-md shadow-palette-border-glow/60 rounded-[6px] transition duration-200 ease-in-out select-none leading-none">
                                Website
                            </a>
                        }
                        {
                            contribution.source &&
                            <a aria-label={`View source code for ${contribution.name}`} href={contribution.source} target="_blank" rel="noopener noreferrer" className="text-palette-text px-2 py-2 bg-palette-primary hover:bg-palette-secondary/50 border border-palette-secondary shadow-md shadow-palette-border-glow/60 rounded-[6px] transition duration-200 ease-in-out select-none leading-none">
                                Source
                            </a>
                        }
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Contribution;
