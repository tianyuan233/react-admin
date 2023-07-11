import dashboard from './dashboard';
import pages from './pages';
import u from './u';
import { SvgIconComponent } from "@mui/icons-material";

export interface MenuItem {
  id: string;
  title: string;
  type: string;
  url?: string;
  icon?: SvgIconComponent
  breadcrumbs?: boolean;
  target?: string;
  external?: boolean;
  disabled?: boolean;
  caption?: string;
  children?: MenuItem[];
}

const menuItems :MenuItem[] = [dashboard, pages,u]

export default menuItems;
