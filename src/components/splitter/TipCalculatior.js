
import { ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import customPapertheme from "../../themes/customPapertheme";

import styles from "./TipCalculator.style";

function TipCalculator() {
    const classes = styles;

    return (
        <ThemeProvider theme={customPapertheme}>
            <Paper variant='outlined' sx={classes.paperContainer}>
                <Box sx={classes.mainContainer}>
                    <Box sx={classes.tipCalculator}>
                        <Typography variant='subtitle2'>
                            Tip Amount
                        </Typography>
                        <Typography variant='h4'> $0.00 </Typography>
                    </Box>
                    <Box sx={classes.tipCalculator}>
                        <Typography variant='subtitle2'> Total </Typography>
                        <Typography variant='h4'> $0.00 </Typography>
                    </Box>
                    <Box sx={classes.buttonContainer}>
                        <Button variant='contained' disabled>
                            RESET
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </ThemeProvider>
    );
}

export default TipCalculator;
