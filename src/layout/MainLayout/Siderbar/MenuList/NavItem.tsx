import {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

// material-ui
// import {useTheme} from '@mui/material/styles';
import {ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
// project imports
import {MenuItem} from "@/menu-items";

interface NavItemProps {
  item: MenuItem;
  level: number;
}

const NavItem = ({item, level}: NavItemProps) => {
    // const theme = useTheme();
    const {pathname} = useLocation();

    const Icon = item.icon;
    const itemIcon = Icon ? (<Icon/>) : (
      <FiberSmartRecordIcon/>
    )

    const itemHandler = (item: MenuItem) => {
      console.log(item)
    };

    // active menu item on page load
    useEffect(() => {
      const currentIndex = document.location.pathname
        .toString()
        .split('/')
        .findIndex((id) => id === item.id);
      // if (currentIndex > -1) {
      //   dispatch({type: MENU_OPEN, id: item.id});
      // }
      console.log(currentIndex);
    }, [pathname]);

    return (
      <ListItemButton
        component={item.external ? 'a' : Link}
        to={item.url}
        target={item.target ? item.target : '_self'}
        disabled={item.disabled}
        sx={{
          borderRadius: `12px`,
          mb: 0.5,
          alignItems: 'flex-start',
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`
        }}
        // selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
        onClick={() => itemHandler(item)}
      >
        <ListItemIcon sx={{my: 'auto', minWidth: !item?.icon ? 18 : 36}}>{itemIcon}</ListItemIcon>
        <ListItemText
          primary={
            <Typography
              // variant={customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'}
              color="inherit">
              {item.title}
            </Typography>
          }
          secondary={
            item.caption && (
              <Typography variant="caption" display="block" gutterBottom>
                {item.caption}
              </Typography>
            )
          }
        />
      </ListItemButton>
    );
  }
;


export default NavItem;
