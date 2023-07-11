import {MenuItem} from "@/menu-items";
import {Divider, List, Typography} from "@mui/material";
import {ReactNode} from "react";
import NavCollapse from "@/layout/MainLayout/Siderbar/MenuList/NavCollapse.tsx";
import NavItem from "@/layout/MainLayout/Siderbar/MenuList/NavItem.tsx";
// import {useTheme} from "@mui/material/styles";

const NavGroup = ({item}: { item: MenuItem }) => {
  // const theme = useTheme();
  const children: ReactNode[] | undefined = item.children?.map((menu) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1}/>;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1}/>;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });
  return (
    <>
      <List subheader={
        item.title && (
          <Typography variant="caption" sx={{
            fontSize: '0.875rem',
            fontWeight: 500,
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px'
          }} display="block" gutterBottom>
            {item.title}
            {item.caption && (
              <Typography variant="caption" sx={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                textTransform: 'capitalize'
              }} display="block" gutterBottom>
                {item.caption}
              </Typography>
            )}
          </Typography>)
      }>
        {children}
      </List>
      <Divider sx={{mt: 0.25, mb: 1.25}}/>
    </>
  );
};

export default NavGroup;
