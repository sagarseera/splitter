// import { teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import SpaceMono from "../fonts/Space_Mono/SpaceMono-Bold.ttf";

const theme = createTheme({
    palette: {
        type: "light",
        background: {
            default: "#fff"
        },
        primary: {
            main: "#00474b"
        },
        secondary: {
            main: "#f50057"
        }
    },
    typography: {
        fontFamily: "Space Mono"
    },
    // Adding custom break points
    // breakpoints: {
    //     values: {
    //       xs: 0,
    //       sm: 600,
    //       md: 900,
    //       lg: 1200,
    //       xl: 1536,
    //     },
    //   },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "@font-face": {
                    fontFamily: "Space Mono",
                    src: `url(${SpaceMono}) format("truetype")`
                },
                body: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100Vh',
                    background: 'hsl(185, 41%, 84%)'
                },
            }
        },
    }
});

export default theme;
