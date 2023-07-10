import {ThemeProvider} from '@mui/material/styles';
import {createTheme, CssBaseline, PaletteColor} from "@mui/material";
import Routes from "./routes"
import { indigo } from "@mui/material/colors";

function App() {
    const theme = createTheme({
        palette: {
            secondary:{
                light:indigo[100],
                dark:indigo[800],
                main:indigo[500],
                contrastText:"#fff"
            },
            background:{
                default:"#fff"
            }
        },
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '10px',
            }
        },
    })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes/>
        </ThemeProvider>
    )
}

export default App
