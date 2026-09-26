import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ThemeContext,
  type ResolvedTheme,
  type Theme,
} from "@/lib/theme-context";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

const getSystemTheme = (): ResolvedTheme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const resolveTheme = (theme: Theme): ResolvedTheme =>
  theme === "system" ? getSystemTheme() : theme;

const applyTheme = (theme: Theme) => {
  const resolvedTheme = resolveTheme(theme);
  const root = document.documentElement;

  root.classList.toggle("dark", resolvedTheme === "dark");
  root.classList.toggle("light", resolvedTheme === "light");
  root.style.colorScheme = resolvedTheme;

  return resolvedTheme;
};

const getStoredTheme = (storageKey: string, defaultTheme: Theme): Theme => {
  let storedTheme: string | null = null;

  try {
    storedTheme = localStorage.getItem(storageKey);
  } catch {
    return defaultTheme;
  }

  return storedTheme === "dark" ||
    storedTheme === "light" ||
    storedTheme === "system"
    ? storedTheme
    : defaultTheme;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() =>
    getStoredTheme(storageKey, defaultTheme)
  );
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(getStoredTheme(storageKey, defaultTheme))
  );

  useEffect(() => {
    setResolvedTheme(applyTheme(theme));

    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => setResolvedTheme(applyTheme("system"));

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      try {
        localStorage.setItem(storageKey, nextTheme);
      } catch {
        // Theme switching should still work when storage is unavailable.
      }

      setResolvedTheme(applyTheme(nextTheme));
      setThemeState(nextTheme);
    },
    [storageKey]
  );

  const value = useMemo(
    () => ({ resolvedTheme, setTheme }),
    [resolvedTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
