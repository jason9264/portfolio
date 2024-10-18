import React, { useState, useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
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
    };

    // Preload images
    const preloadImage = (src: string) => { // Explicitly define src as string
        const img = new Image();
        img.src = src;
    };

    useEffect(() => {
        // Preload background images
        preloadImage("./assets/images/bg-dark.png");
        preloadImage("./assets/images/bg-light.png");

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