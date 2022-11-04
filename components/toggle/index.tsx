import { useState, useEffect } from "react";
import styles from "./Toggle.module.css";

const Toggle = () => {
    const [activeTheme, setActiveTheme] = useState(
        document.body.dataset.theme!
    );
    const inactiveTheme = activeTheme === "dark" ? "light" : "dark";
    const emoji = activeTheme === "dark" ? "🌑" : "☀️";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        localStorage.setItem("theme", activeTheme);
        window.dispatchEvent(new Event("themeUpdate")); // for responsiveness of other components
    }, [activeTheme]);

    return (
        <button
            onClick={() => setActiveTheme(inactiveTheme)}
            className={styles.toggle}
            aria-label={`Change to ${inactiveTheme} mode`}
            title={`Change to ${inactiveTheme} mode`}
        >
            {emoji}
        </button>
    );
};

export default Toggle;
