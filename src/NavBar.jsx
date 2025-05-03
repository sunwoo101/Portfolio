import NavElement from "./NavElement";

function NavBar() {
    return (
        <header>
            <nav className="flex w-max mx-auto left-0 right-0 fixed top-10 w-full justify-center hidden sm:block">
                <div className="flex justify-center bg-white/5 border-white/50 backdrop-blur-sm shadow-sm shadow-white/60 border p-4 rounded-[10px] leading-none">
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