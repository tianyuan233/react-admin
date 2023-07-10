import dashboard from './dashboard';
import pages from './pages';
import { SvgIconComponent } from "@mui/icons-material";

export interface MenuItem {
  id: string;
  title: string;
  type: string;
  url?: string;
  icon?: SvgIconComponent
  breadcrumbs?: boolean;
  children?: MenuItem[];
}

const menuItems :MenuItem[] = [dashboard, pages]

export default menuItems;
