import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Inicializa el tema desde localStorage o preferencia sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, []);

  // Cambia el tema y guarda en localStorage
  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      style={{
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        backgroundColor: theme === "dark" ? "#fff" : "#000",
        transition: "background-color 0.3s ease",
        padding: 0,
      }}
    />
  );
}