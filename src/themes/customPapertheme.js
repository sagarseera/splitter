// import { teal } from '@mui/material/colors';
import { createTheme } from "@mui/material/styles";

const customPapertheme = (theme) =>
    createTheme({
        ...theme,
        palette: {
            text: {
                primary: "#fff"
            },
            primary: {
                main: "hsl(183, 100%, 15%)"            },
            secondary: {
                main: "#f50057"
            },
            // Customizing Paper Background
            background: {
                paper: "hsl(183, 100%, 15%)"
            }
        },
        // overriding default components css
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: 20
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        paddingLeft: 150,
                        paddingRight: 150,
                        paddingTop: 10,
                        paddingBottom: 10
                    }
                }
            }
        }
    });

export default customPapertheme;
