declare module "gatsby-plugin-dark-mode" {
  type themeType = "light" | "dark";
  interface ThemeTogglerProps {
    children: (props: { theme: themeType; toggleTheme: (theme: string) => themeType }) => React.ReactNode;
  }
  const ThemeToggler: React.FC<ThemeTogglerProps>;
  export const ThemeToggler;
}
