import NavElement from "./Components/NavElement";

function NavBar() {
    return (
        <header>
            <nav aria-label="Main navigation" className="flex w-max mx-auto left-0 right-0 fixed top-10 justify-center hidden sm:flex z-50">
                <div className="flex justify-center bg-white/5 border-palette-secondary backdrop-blur-sm shadow-md shadow-palette-border-glow/60 border p-4 rounded-[10px] leading-none">
                    <NavElement text="About" link="#about" />
                    <NavElement text="Experience" link="#experience" />
                    <NavElement text="Projects" link="#projects" />
                    {/*<NavElement text="Clients" />*/}
                    <NavElement text="Contact" link="#contact" />
                </div>
            </nav>
        </header>
    );
}

export default NavBar;