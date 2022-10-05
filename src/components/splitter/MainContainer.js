import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";

import mainContainerTheme from "../../themes/mainContainerTheme";
import TipCalculatior from "./TipCalculatior";

import styles from "./MainContainer.Style";


function MainContainer() {
    // getting current theme values
    const theme = useTheme();

    const classes = styles(theme);
    const tipPercentages = ["5%", "10%", "15%", "25%", "50%"];

    return (
        <ThemeProvider theme={mainContainerTheme}>
            <Paper sx={classes.mainContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Box sx={classes.boxContainer}>
                            <Box mb={1}>
                                <Typography>Bill</Typography>
                                <OutlinedInput
                                    id='outlined-adornment-tip'
                                    fullWidth
                                    startAdornment={
                                        <InputAdornment position='start'>
                                            $
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            0
                                        </InputAdornment>
                                    }
                                    aria-describedby='outlined-weight-helper-text'
                                    inputProps={{
                                        "aria-label": "Tip"
                                    }}
                                />
                            </Box>
                            <Box mb={1}>
                                <Typography>Select Tip %</Typography>
                                <Box sx={classes.buttonContainer}>
                                    {tipPercentages.map((percentage) => {
                                        return (
                                            <Button
                                                variant='contained'
                                                key={percentage}
                                            >
                                                {percentage}
                                            </Button>
                                        );
                                    })}
                                </Box>
                            </Box>
                            <Box>
                                <Typography>No of People</Typography>
                                <OutlinedInput
                                    id='outlined-adornment-tip'
                                    fullWidth
                                    startAdornment={
                                        <InputAdornment position='start'>
                                            <PersonIcon />
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            0
                                        </InputAdornment>
                                    }
                                    aria-describedby='outlined-weight-helper-text'
                                    inputProps={{
                                        "aria-label": "No of Persons"
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TipCalculatior />
                    </Grid>
                </Grid>
            </Paper>
        </ThemeProvider>
    );
}

export default MainContainer;
