import { useState, useEffect } from "react";
import styles from "./Topnav.module.css";

export const Toggle = () => {
    const [theme, setTheme] = useState(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
    );

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        window.dispatchEvent(new Event("themeUpdate")); // for responsiveness of other components
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className={styles.themeToggle}
        >
            <img
                src={`/assets/${theme}/toggle.svg`}
                alt={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                aria-hidden="true"
                width={30}
                height={30}
            />
        </button>
    );
};

export const Logo = () => {
    const [theme, setTheme] = useState(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
    );

    useEffect(() => {
        window.addEventListener("themeUpdate", () => {
            if (localStorage.getItem("theme")) {
                setTheme(localStorage.getItem("theme")!);
            } else {
                setTheme(
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? "dark"
                        : "light"
                );
            }
        });
    });

    return (
        <a href="/">
            <img
                src={`/assets/${theme}/nexliber.svg`}
                alt="NexLiber logo"
                width={50}
                height={50}
                className={styles.logo}
            />
        </a>
    );
};
