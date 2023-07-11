import {Avatar} from '@mui/material';
import {useTheme} from "@mui/material/styles";

const Logo = () => {
  const theme = useTheme();
  return (
    <Avatar sx={{backgroundColor: theme.palette.primary.main}}>N</Avatar>
  );
};

export default Logo;
