function SkillTag({text}) {
    return (
        <span className="text-palette-text bg-palette-primary px-2 py-1 border border-palette-accent rounded-[6px] hover:-translate-y-1 transition duration-200 ease-in-out select-none">
            {text}
        </span>
    );
}

export default SkillTag;