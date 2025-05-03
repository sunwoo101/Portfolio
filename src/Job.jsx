import TechTag from "./TechTag";

function Job({ job }) {
    return (
        <div className="bg-palette-secondary/20 border border-palette-text/50 rounded-[10px] w-full flex flex-col justify-center items-center py-5 px-5">
            <div className="w-full">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-palette-text text-2xl leading-none">{job.name}</h3>
                        <h5 className="text-palette-text text-lg leading-none">{job.location}</h5>
                        <h4 className="text-palette-text text-lg group-hover:text-palette-text transition duration-200 leading-none">{job.date}</h4>
                    </div>

                    <p className="text-palette-text text-sm leading-relaxed py-2">
                        {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2"> {
                        job.stack.map((tech, index) => {
                            return <TechTag key={index} text={tech} />
                        })
                    }
                    </div>

                    {
                        job.link &&
                        <div className="flex flex-wrap gap-2">
                            <a href={job.link} target="_target" className="text-palette-text px-2 py-2 bg-palette-secondary/50 hover:bg-palette-primary border border-palette-accent rounded-[6px] transition duration-200 ease-in-out select-none leading-none">
                                Website
                            </a>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Job;