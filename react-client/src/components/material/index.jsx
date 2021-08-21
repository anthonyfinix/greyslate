import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./theme";
const Material = ({ children, ...props }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Material;