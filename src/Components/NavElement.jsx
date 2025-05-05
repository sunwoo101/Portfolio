function NavElement({ text = 'Default', link = '' }) {
    return (
        <a
            href={link}
            className="
                text-palette-text
                mx-4
                hover:cursor-pointer
                transition-[text-shadow] duration-300
                hover:text-shadow-lg
                hover:text-shadow-palette-border-glow/50
            "
            aria-label={`Navigate to ${text} section`}
        >
            {text}
        </a>
    );
}

export default NavElement;