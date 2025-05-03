function Home() {
    return (
        <section id="home" className="w-full h-screen bg-[url('./src/assets/background.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full h-full flex flex-col justify-center items-center text-center mx-auto px-4 py-12">
                <div className="w-full flex-1 flex flex-col justify-center items-center gap-4">
                    <div>
                        <h3 className="w-full text-palette-text text-xl sm:text-3xl leading-none"><i className="fas fa-thumbtack text-palette-text text-xl"></i> Sydney, Australia</h3>
                    </div>
                    <h1 className="w-full text-palette-text text-4xl sm:text-6xl leading-none">Sun Woo Kim</h1>
                    <h2 className="w-full text-palette-text text-2xl sm:text-4xl leading-none">Software Engineer</h2>
                </div>
            </div>
        </section >
    );
}

export default Home;