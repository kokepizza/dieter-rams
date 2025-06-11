import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  function applyTheme(theme: "light" | "dark") {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const html = document.documentElement;
    const body = document.body;

    if (theme === "dark") {
      html.style.backgroundColor = "#1D1D1B";
      body.style.backgroundColor = "#1D1D1B";
    } else {
      html.style.backgroundColor = "#F5F5F5";
      body.style.backgroundColor = "#F5F5F5";
    }
  }

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    />
  );
}