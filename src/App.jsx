import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import ThemePicker from './ThemePicker';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
    return (
        <Router>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Home />
                            <About />
                            <Experience />
                            <Projects />
                            <Contact />
                        </>
                    } />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
