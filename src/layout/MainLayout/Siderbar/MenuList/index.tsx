import menuItems from "@/menu-items";
import NavGroup from "./NavGroup";

const MenuList = () => {

  return (
    <>
    {menuItems.map((item, index: number) => {
      if (item.type === 'group') {
        return <NavGroup key={index} item={item} />
      }

    })}
    </>
  )
};

export default MenuList;
