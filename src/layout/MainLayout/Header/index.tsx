// material-ui
import {useTheme} from "@mui/material/styles";
import {Avatar, Box, ButtonBase} from "@mui/material";
import Logo from "../Logo";
// import LogoSection from '../LogoSection';
// import SearchSection from './SearchSection';
// import ProfileSection from './ProfileSection';
// import NotificationSection from './NotificationSection';

import MenuIcon from "@mui/icons-material/Menu";

const Header = ({onDrawerToggle}: { onDrawerToggle: () => void }) => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{display: "flex"}}>
        <Box component="span" sx={{flexGrow: 1,width:200}}>
          <Logo/>
        </Box>
        <ButtonBase sx={{borderRadius: "12px", overflow: "hidden"}}>
          <Avatar
            variant="rounded"
            sx={{
              transition: "all .2s ease-in-out",
              color: theme.palette.secondary.dark,
              background: theme.palette.secondary.light,
              "&:hover": {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light,
              },
            }}
            onClick={onDrawerToggle}
            color="inherit"
          >
            <MenuIcon/>
          </Avatar>
        </ButtonBase>
      </Box>

      {/* header search */}
      {/* <SearchSection /> */}
      <Box sx={{flexGrow: 1}}/>
      <Box sx={{flexGrow: 1}}/>

      {/* notification & profile */}
      {/* <NotificationSection />
      <ProfileSection /> */}
    </>
  );
};

export default Header;
