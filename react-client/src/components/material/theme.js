import createTheme from "@material-ui/core/styles/createTheme";
import grey from "@material-ui/core/colors/grey";
const theme = createTheme({
    palette: {
        type: "dark",
        background: {
            default: grey[900]
        }
    }
})
export default theme;