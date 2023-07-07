import {AppBar, Box} from "@mui/material"
import { useTheme } from '@mui/material/styles';

const Index = () => {
    const theme = useTheme()
    return (
        <Box>
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    backgroundColor: theme.palette.background.default,
                    transition: 'none'
                }}
            >
                asdasd
            </AppBar>
            this is a layout
        </Box>
    )
}

export default Index