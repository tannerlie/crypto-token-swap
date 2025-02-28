import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    bg: Palette['primary'];
  }

  interface PaletteOptions {
    bg?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    altBg: Palette['primary'];
  }

  interface PaletteOptions {
    altBg?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    border: Palette['primary'];
  }

  interface PaletteOptions {
    border?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    texts: Palette['primary'];
  }

  interface PaletteOptions {
    texts?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    altText: Palette['primary'];
  }

  interface PaletteOptions {
    altText?: PaletteOptions['primary'];
  }
}

let theme = createTheme({
  palette: {
    primary: {
      light: "#b7bfa3",
      main: "#c6e579",
      dark: "#82a133"
    },
    secondary: {
      main: "#4c4c4c",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

theme = createTheme(theme, {
  palette: {
    bg: theme.palette.augmentColor({
      color: {
        light: "#FFFFFF",
        main: '#f4f9fd',
        dark: "#e6eef5"
      },
      name: 'bg',
    }),
    altBg: theme.palette.augmentColor({
      color: {
        main: '#193b4d',
      },
      name: 'bg',
    }),
    border: theme.palette.augmentColor({
      color: {
        dark: "#4A4A4A",
        main: "#9E9E9E",
        light: "#D6D6D6",
      },
      name: 'border',
    }),
    texts: {
      lighter: "#ababab",
      light: "#222222",
      main: "#4c4c4c",
    },
    altText: theme.palette.augmentColor({
      color: {
        // main: "#F4F9FD",
        main: "#FFFFFF"
      }
    })
  },
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
