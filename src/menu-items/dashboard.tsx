// assets
import PieChartIcon from '@mui/icons-material/PieChart';
// constant

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: PieChartIcon,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
