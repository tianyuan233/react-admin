// styles
import {useTheme} from "@mui/material/styles";
import {borderRadius, drawerWidth, headerHeight} from "@/store/constant.ts";

interface Props {
  open: boolean;
  children: React.ReactNode;
}

const Main = ({open, children}: Props) => {
  const theme = useTheme();
  return (
    <main style={
      {
        backgroundColor: '#eef2f6',
        width: '100%',
        minHeight: `calc(100vh - ${headerHeight}px)`,
        flexGrow: 1,
        padding: '20px',
        marginTop: headerHeight,
        marginRight: '20px',
        borderRadius: `${borderRadius}px`,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create(
          'margin',
          open
            ? {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen
            }
            : {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen
            }
        ),
        marginLeft: open ? 0 : -(drawerWidth - 20),
        // width: `calc(100% - ${drawerWidth}px)`
      }

    }>
      {children}
    </main>
  )
}

export default Main