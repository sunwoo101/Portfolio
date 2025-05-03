function SkillTag({text}) {
    return (
        <span className="text-palette-text text-base bg-palette-primary p-1 border border-palette-secondary rounded-[6px] hover:-translate-y-1 transition duration-200 ease-in-out select-none">
            {text}
        </span>
    );
}

export default SkillTag;