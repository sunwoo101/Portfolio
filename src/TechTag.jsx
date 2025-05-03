function TechTag({text}) {
    return (
        <p aria-label={`Technology: ${text}`} className="text-palette-text text-xs bg-palette-primary p-[4px] border border-palette-secondary shadow-md shadow-palette-border-glow/60 rounded-[6px] hover:-translate-y-1 transition duration-200 ease-in-out select-none leading-none">
            {text}
        </p>
    );
}

export default TechTag;