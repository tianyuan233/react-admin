import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

// material-ui
import {useTheme} from '@mui/material/styles';
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';

// project imports
import NavItem from './NavItem';

// assets
import {MenuItem} from "@/menu-items";
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ==============================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||============================== //
interface NavCollapseProps {
  menu: MenuItem;
  level: number;
}

const NavCollapse = ({menu, level}: NavCollapseProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = () => {
    setOpen(!open);
    setSelected(!selected ? menu.id : null);
    if (menu?.id !== 'authentication' && menu.children && menu.children.length) {
      navigate(menu.children[0]?.url as string);
    }
  };

  const {pathname} = useLocation();
  const checkOpenForParent = (child: MenuItem[], id: string) => {
    child.forEach((item) => {
      if (item.url === pathname) {
        setOpen(true);
        setSelected(id);
      }
    });
  };

  // menu collapse for sub-levels
  useEffect(() => {
    setOpen(false);
    setSelected(null);
    if (menu.children) {
      menu.children.forEach((item) => {
        if (item.children?.length) {
          checkOpenForParent(item.children, menu.id);
        }
        if (item.url === pathname) {
          setSelected(menu.id);
          setOpen(true);
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, menu.children]);

  // menu collapse & item
  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return <NavCollapse key={item.id} menu={item} level={level + 1}/>;
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1}/>;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const Icon = menu.icon;
  const menuIcon = Icon ? (
    <Icon style={{marginTop: 'auto', marginBottom: 'auto'}}/>
  ) : (
    <FiberSmartRecordIcon style={{marginTop: 'auto', marginBottom: 'auto'}}/>
  );

  return (
    <>
      <ListItemButton
        sx={{
          borderRadius: `12px`,
          mb: 0.5,
          alignItems: 'flex-start',
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`
        }}
        selected={selected === menu.id}
        onClick={handleClick}
      >
        <ListItemIcon sx={{my: 'auto', minWidth: !menu.icon ? 18 : 36}}>{menuIcon}</ListItemIcon>
        <ListItemText
          primary={
            <Typography color="inherit" sx={{my: 'auto'}}>
              {menu.title}
            </Typography>
          }
          secondary={
            menu.caption && (
              <Typography variant="caption" display="block" gutterBottom>
                {menu.caption}
              </Typography>
            )
          }
        />
        {open ? (
          <ExpandLessIcon style={{marginTop: 'auto', marginBottom: 'auto'}}/>
        ) : (
          <ExpandMoreIcon style={{marginTop: 'auto', marginBottom: 'auto'}}/>
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            position: 'relative',
            '&:after': {
              content: "''",
              position: 'absolute',
              left: '32px',
              top: 0,
              height: '100%',
              width: '1px',
              opacity: 1,
              background: theme.palette.primary.light
            }
          }}
        >
          {menus}
        </List>
      </Collapse>
    </>
  );
};
export default NavCollapse;
