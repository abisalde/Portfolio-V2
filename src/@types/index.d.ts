declare module 'gatsby-plugin-dark-mode' {
	interface ThemeTogglerProps {
		onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
		theme: string;
		label: string;
	}
	const ThemeToggler: React.FC<ThemeTogglerProps>;
	export const ThemeToggler;
}
