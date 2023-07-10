import { Box, Drawer, useTheme, Stack, Chip } from "@mui/material";
import { drawerWidth, headerHeight } from "@/store/constant";
import PerfectScrollbar from "react-perfect-scrollbar";
import MenuList from "./MenuList";
interface Props {
  drawerOpen: boolean;
  drawerToggle: () => void;
  window?: object;
}
const Index = ({ drawerOpen, drawerToggle, window }: Props) => {
  const theme = useTheme();
  const content = (
    <>
      <PerfectScrollbar
        component="div"
        style={{
          height: `calc(100vh - ${headerHeight}px)`,
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <MenuList />
        {/* <MenuCard /> */}
        <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
          <Chip label="All" disabled size="small" sx={{ cursor: "pointer" }} />
        </Stack>
      </PerfectScrollbar>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: drawerWidth }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="persistent"
        anchor="left"
        hideBackdrop={true}
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "#ffffff",
            color: theme.palette.text.primary,
            borderRight: "none",
            boxShadow: "none",
            top: headerHeight,
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {content}
      </Drawer>
    </Box>
  );
};

export default Index;
