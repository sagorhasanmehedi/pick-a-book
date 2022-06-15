import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1920,
        },
    },
    background: {
        
        primary: "#ffffff",
        secondary: "#e5e5e5",
        info: "#1B5E20",
sideBar: "#536475",
layoutRoot:"#87b2cf",
layoutContainer:"#eff1f5"

    },
    palette: {
        neutral: {
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
        },

        divider: "#E6E8F0",
        // primary: {
      
        //     main: "#FFFFFF",
        //     light: "#828DF8",
        //     dark: "#3832A0",
        //     contrastText: "#FFFFFF",
        // },
        secondary: {
            main: "#A4A6B3",
            light: "#3FC79A",
            dark: "#0B815A",
            contrastText: "#FFFFFF",
        },
        success: {
            main: "#14B8A6",
            light: "#43C6B7",
            dark: "#0E8074",
            contrastText: "#FFFFFF",
        },
        info: {
            main: "#2196F3",
            light: "#64B6F7",
            dark: "#0B79D0",
            contrastText: "#FFFFFF",
        },
        warning: {
            main: "#FFB020",
            light: "#FFBF4C",
            dark: "#B27B16",
            contrastText: "#FFFFFF",
        },
        error: {
            main: "#D14343",
            light: "#DA6868",
            dark: "#922E2E",
            contrastText: "#FFFFFF",
        },

        text: {
            primary: "#121828",
            secondary: "#65748B",
            disabled: "rgba(55, 65, 81, 0.48)",
        },
    },
    shadows: [
        "none",
        "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
        "0px 1px 2px rgba(100, 116, 139, 0.12)",
        "0px 1px 4px rgba(100, 116, 139, 0.12)",
        "0px 1px 5px rgba(100, 116, 139, 0.12)",
        "0px 1px 6px rgba(100, 116, 139, 0.12)",
        "0px 2px 6px rgba(100, 116, 139, 0.12)",
        "0px 3px 6px rgba(100, 116, 139, 0.12)",
        "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
        "0px 5px 12px rgba(100, 116, 139, 0.12)",
        "0px 5px 14px rgba(100, 116, 139, 0.12)",
        "0px 5px 15px rgba(100, 116, 139, 0.12)",
        "0px 6px 15px rgba(100, 116, 139, 0.12)",
        "0px 7px 15px rgba(100, 116, 139, 0.12)",
        "0px 8px 15px rgba(100, 116, 139, 0.12)",
        "0px 9px 15px rgba(100, 116, 139, 0.12)",
        "0px 10px 15px rgba(100, 116, 139, 0.12)",
        "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
        "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
        "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
        "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
    ],
});