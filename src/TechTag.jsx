function TechTag({text}) {
    return (
        <span className="text-palette-text text-xs bg-palette-primary p-[4px] border border-palette-secondary shadow-md shadow-palette-border-glow/60 rounded-[6px] hover:-translate-y-1 transition duration-200 ease-in-out select-none">
            {text}
        </span>
    );
}

export default TechTag;