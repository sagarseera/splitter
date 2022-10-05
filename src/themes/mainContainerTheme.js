// import { teal } from '@mui/material/colors';
import { createTheme } from "@mui/material/styles";

const mainContainerTheme = (theme) =>
    createTheme({
        ...theme,
        palette: {
            text: {
                primary: "#757c7b"
            },
            primary: {
                main: "#00474b"
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        paddingLeft: 15,
                        paddingRight: 15
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: 20
                    }
                }
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        marginBottom: 10,
                        marginTop: 10,
                        fontWeight: 500
                    }
                }
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        background: "hsl(189, 41%, 97%)"
                    }
                }
            },
            MuiGrid: {
                styleOverrides: {
                    root: {
                        [theme.breakpoints.down("md")]: {
                            // display: 'none',
                            margin: 0,
                            padding: 0,
                            width: '90%'
                        }
                    }
                }
            }
        }
    });

export default mainContainerTheme;
