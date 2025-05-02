import NavElement from "./NavElement";

function NavBar() {
    return (
        <header>
            <nav className="flex fixed top-10 left-0 w-full justify-center">
                <div className="flex justify-center bg-white/5 border-white/50 backdrop-blur-sm shadow-sm shadow-white/60 border p-4 rounded-[10px]">
                    <NavElement text="Intro" link="#intro" />
                    <NavElement text="About Me" link="#about-me" />
                    <NavElement text="Projects" />
                    <NavElement text="Clients" />
                </div>
            </nav>
        </header>
    );
}

export default NavBar;