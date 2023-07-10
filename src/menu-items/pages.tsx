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
      url: '/pages/default',
      icon: PieChartIcon,
      breadcrumbs: false
    }
  ]
};

export default pages;
