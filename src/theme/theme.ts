import { createTheme, type ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        glass: {
            background: string;
            border: string;
            boxShadow: string;
            backdropFilter: string;
        };
    }
    interface ThemeOptions {
        glass?: {
            background?: string;
            border?: string;
            boxShadow?: string;
            backdropFilter?: string;
        };
    }
}

const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
    palette: {
        mode,
        primary: {
            main: mode === 'dark' ? '#00e676' : '#00c853', // A vibrant WhatsApp-like green
        },
        background: {
            default: mode === 'dark' ? '#0a192f' : '#f0f2f5',
            paper: mode === 'dark' ? '#112240' : '#ffffff',
        },
        text: {
            primary: mode === 'dark' ? '#ccd6f6' : '#1a1a1a',
            secondary: mode === 'dark' ? '#8892b0' : '#4a4a4a',
        },
    },
    typography: {
        fontFamily: '"Inter", "Outfit", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 800,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 700,
        },
    },
    glass: {
        background: mode === 'dark' ? 'rgba(17, 34, 64, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: mode === 'dark' ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' : '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        backdropFilter: 'blur(10px)',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 600,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none', // Remove default MUI paper gradient in dark mode
                },
            },
        },
    },
});

export const getTheme = (mode: 'light' | 'dark') => createTheme(getDesignTokens(mode));
