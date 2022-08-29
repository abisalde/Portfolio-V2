declare module "gatsby-plugin-dark-mode" {
  type themeType = "light" | "dark";
  interface ThemeTogglerProps {
    children: (props: { theme: themeType; toggleTheme: (theme: string) => themeType }) => React.ReactNode;
  }
  const ThemeToggler: React.FC<ThemeTogglerProps>;
  export const ThemeToggler;
}

declare module "gatsby-plugin-transition-link" {
  type EEType = {
    state?: any;
    delay?: number;
    length?: number;
  };

  type TransitionStatePropTypes = {
    transitionStatus?: string;
    entry?: EEType | any;
    exit?: EEType | any;
  };

  interface TransitionStateProps {
    children: (props: TransitionStatePropTypes) => React.ReactNode;
  }
  const TransitionState: React.FC<TransitionStateProps>;
  export { TransitionHandler, TransitionState, TransitionPortal, TransitionObserver, useTriggerTransition };
  export default TransitionLink;
}

declare module "gatsby-plugin-transition-link/AniLink";
