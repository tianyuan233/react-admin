import {useTheme,styled} from "@mui/material/styles";
import {logoText} from "@/store/constant.ts";

const Logo = () => {
  const theme = useTheme();

  const LogoDiv = styled('div')(() => ({
    color: theme.palette.primary.dark,
    fontWeight: 800,
    fontSize: 18,
    letterSpacing: 1,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    }));
  return (
    <LogoDiv>{logoText}</LogoDiv>
  );
};

export default Logo;
