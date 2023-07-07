import {ThemeProvider} from '@mui/material/styles';
import {createTheme, CssBaseline} from "@mui/material";
import Routes from "./routes"

function App() {
    const theme = createTheme({
        palette: {
            background:{
                default:"#eeeeee"
            }
        },
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
    })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <h1> this is react page </h1>
            <Routes/>
        </ThemeProvider>
    )
}

export default App
