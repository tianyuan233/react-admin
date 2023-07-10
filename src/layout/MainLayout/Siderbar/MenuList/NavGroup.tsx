import { MenuItem } from "@/menu-items";
import { List } from "@mui/material";

const NavGroup = ({ item }: { item: MenuItem }) => {
  return (
    <>
      <List subheader={item.title}></List>
    </>
  );
};

export default NavGroup;
