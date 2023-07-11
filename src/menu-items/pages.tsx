// assets
import PieChartIcon from '@mui/icons-material/PieChart';
// constant

// ==============================|| pages MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'pages',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'pages',
      type: 'item',
      url: '/',
      icon: PieChartIcon,
      breadcrumbs: false
    }
  ]
};

export default pages;
