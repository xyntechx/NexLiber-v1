import { useState, useEffect } from "react";
import styles from "./Toggle.module.css";

const Toggle = () => {
    const [activeTheme, setActiveTheme] = useState(
        document.body.dataset.theme!
    );
    const inactiveTheme = activeTheme === "dark" ? "light" : "dark";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        localStorage.setItem("theme", JSON.stringify(activeTheme));
        window.dispatchEvent(new Event("themeUpdate")); // for responsiveness of other components
    }, [activeTheme]);

    return (
        <button
            onClick={() => setActiveTheme(inactiveTheme)}
            className={styles.button}
            aria-label={`Change to ${inactiveTheme} mode`}
            title={`Change to ${inactiveTheme} mode`}
        >
            <span
                className={styles.thumb}
                style={{
                    transform:
                        activeTheme === "dark"
                            ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
                            : "none",
                }}
            ></span>
            <span aria-hidden={true}>🌑</span>
            <span aria-hidden={true}>☀️</span>
        </button>
    );
};

export default Toggle;
