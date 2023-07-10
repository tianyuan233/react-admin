import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Header from "./Header";
import Siderbar from "./Siderbar";
import Main from "./Main";
import { useState } from "react";

const Index = () => {
  const theme = useTheme();
  const [drawerOpened, setDrawerOpened] = useState(false);
  const onDrawerToggle = () => {
    setDrawerOpened(!drawerOpened);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          transition: "none",
        }}
      >
        <Toolbar>
          <Header onDrawerToggle={onDrawerToggle}></Header>
        </Toolbar>
      </AppBar>
      <Siderbar
        drawerOpen={drawerOpened}
        drawerToggle={onDrawerToggle}
      ></Siderbar>
      <Main></Main>
    </Box>
  );
};

export default Index;
