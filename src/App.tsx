import {ThemeProvider} from '@mui/material/styles';
import {createTheme, CssBaseline} from "@mui/material";
import Routes from "./routes"
import {indigo} from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        light: indigo[100],
        dark: indigo[800],
        main: indigo[500],
        contrastText: "#fff"
      },
      primary: {
        light: indigo[100],
        dark: indigo[800],
        main: indigo[500],
        contrastText: "#fff"
      },
      background: {
        default: "#fff"
      }
    },
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '10px',
      }
    },
  })
  theme.components = {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
            },
            '& .MuiListItemIcon-root': {
              color: theme.palette.primary.contrastText,
            }
          },
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.main,
          }

        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          minWidth: '36px'
        }
      }
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Routes/>
    </ThemeProvider>
  )
}

export default App
