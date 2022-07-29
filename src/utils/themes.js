import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: 'GoogleSans'
    },
    palette: {
        primary: {
            main: '#0e55b6'
        },
        secondary: {
            main: '#d8302f'
        },
        text: {
            primary: '#384054',
            secondary: '#b0b7c9',
            accent: '#d8302f',
            title: '#384054'
        },
        background: {
            default: '#f8f9fa',
            paper: '#ffffff',
            transparent: 'rgba(255,255,255,0.50)'
        },
        light: {
            secondary: 'rgba(216,48,47,0.3)',
            primary: 'rgba(14,85,182,0.3)',
            default: 'rgba(56,64,84,0.3)',
        },
        mode: "light"
    },
    shape: {
        borderRadius: 8
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: 'GoogleSans'
    },
    palette: {
        primary: {
            main: '#0e55b6'
        },
        secondary: {
            main: '#d8302f'
        },
        text: {
            primary: '#f8f9fa',
            secondary: '#d2d3d7',
            accent: '#d8302f',
        },
        background: {
            default: '#202124',
            paper: '#2d333b',
            transparent: 'rgba(45,51,59,0.50)'
        },
        light: {
            secondary: 'rgba(216,48,47,0.3)',
            primary: 'rgba(14,85,182,0.3)',
            default: 'rgba(56,64,84,0.3)',
        },
        mode: 'dark'
    },
    shape: {
        borderRadius: 8
    }
});

export const THEMES = {lightTheme, darkTheme};
