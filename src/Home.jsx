function Home() {
    return (
        <section id="home" className="w-full h-screen bg-[url(./src/assets/background.jpeg)] bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full h-full flex flex-col justify-center items-center text-center mx-auto px-4 py-12">
                <div className="w-full flex-1 flex flex-col justify-center items-center gap-4">
                    <div>
                        <h3 className="w-full text-palette-text text-xl sm:text-3xl leading-none"><i className="fas fa-thumbtack text-palette-text text-xl"></i> Sydney, Australia</h3>
                    </div>
                    <h1 className="w-full text-palette-text text-4xl sm:text-6xl leading-none">Sun Woo Kim</h1>
                    <h2 className="w-full text-palette-text text-2xl sm:text-4xl leading-none">Software Engineer</h2>
                </div>

                <div className="w-max flex fixed bottom-10 justify-center items-center gap-4 bg-white/5 border-white/50 backdrop-blur-sm shadow-sm shadow-white/60 border p-4 rounded-[10px] leading-none">
                    <a className="hover:-translate-y-1 transition duration-200 ease-in-out select-none" href="https://linkedin.com/in/sunwoo101" target="_blank">
                        <i className="fab fa-linkedin text-white text-3xl"></i>
                    </a>
                    <a className="hover:-translate-y-1 transition duration-200 ease-in-out select-none" href="https://github.com/sunwoo101" target="_blank">
                        <i className="fab fa-github text-white text-3xl"></i>
                    </a>
                    <a className="hover:-translate-y-1 transition duration-200 ease-in-out select-none" href="mailto:you@example.com">
                        <i className="fas fa-envelope text-white text-3xl"></i>
                    </a>
                </div>
            </div>
        </section >
    );
}

export default Home;