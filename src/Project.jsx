import TechTag from "./TechTag";

function Project({ project }) {
    return (
        <div className="bg-palette-secondary/20 border border-palette-secondary shadow-md shadow-palette-border-glow/60 rounded-[10px] w-full flex flex-col justify-center items-center py-5 px-5">
            <div className="w-full">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-palette-text text-2xl leading-none">{project.name}</h3>
                        <h3 className="text-palette-text text-lg group-hover:text-palette-text transition duration-200 leading-none">{project.date}</h3>
                    </div>

                    <div style={{ backgroundImage: `url(${project.imageLink})` }} className={`w-full h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-[10px]`}>
                        <div className="w-full h-full backdrop-blur-xs hover:backdrop-blur-none group bg-palette-background/80 hover:bg-palette-background/0 transition duration-300 rounded-[10px] p-4">
                            <p className="text-palette-text text-sm leading-relaxed group-hover:text-palette-text/0 transition duration-300 select-none">{project.description}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2"> {
                        project.stack.map((tech, index) => {
                            return <TechTag key={index} text={tech} />
                        })
                    }
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {
                            project.link &&
                            <a href={project.link} target="_target" className="text-palette-text px-2 py-2 bg-palette-secondary/50 hover:bg-palette-primary border border-palette-secondary shadow-md shadow-palette-border-glow/60 rounded-[6px] transition duration-200 ease-in-out select-none leading-none">
                                Website
                            </a>
                        }
                        {
                            project.source &&
                            <a href={project.source} target="_target" className="text-palette-text px-2 py-2 bg-palette-secondary/50 hover:bg-palette-primary border border-palette-secondary shadow-md shadow-palette-border-glow/60 rounded-[6px] transition duration-200 ease-in-out select-none leading-none">
                                Source
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;