import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    // Load mode from local storage
    useEffect(() => {
        const savedMode = localStorage.getItem('mode') || 'dark'; 
        setMode(savedMode);
    }, []);

    // Save mode to local storage
    useEffect(() => {
        localStorage.setItem('mode', mode);
    }, [mode]);

    const handleModeChange = () => {
        setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
                <Main />
                <Expertise />
                <Timeline />
                <Project />
                <Contact />
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;