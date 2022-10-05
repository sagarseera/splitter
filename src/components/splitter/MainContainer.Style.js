const styles = (theme) =>  ({
    mainContainer: {
        display: "flex",
        p: 5,
        width: "fit-content",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            alignItems: "center",
            p: 2,
            width: '100%'
        }
    },
    buttonContainer: {
        display: "flex",
        gap: 4,
        flexWrap: "wrap"
    },
    boxContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            padding: 0
        }
    }
});
export default styles;
