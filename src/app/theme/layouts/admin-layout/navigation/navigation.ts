export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Default',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/default',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'manages',
    title: 'Quản lý',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'listuser',
        title: 'Danh sách người dùng',
        type: 'item',
        classes: 'nav-item',
        url: '/manages/user/user-list',
        icon: 'login',
        target: false,
        breadcrumbs: false
      },
      {
        id: 'listcustomer',
        title: 'Danh sách khách hàng',
        type: 'item',
        classes: 'nav-item',
        url: '/manages/customer/customer-list',
        icon: 'login',
        target: false,
        breadcrumbs: false
      },
      {
        id: 'listcategory',
        title: 'Danh sách loại cây',
        type: 'item',
        classes: 'nav-item',
        url: '/manages/category/category-list',
        icon: 'login',
        target: false,
        breadcrumbs: false
      },
      {
        id: 'listtree',
        title: 'Danh sách cây',
        type: 'item',
        classes: 'nav-item',
        url: '/manages/tree/tree-list',
        icon: 'login',
        target: false,
        breadcrumbs: false
      },
      {
        id: 'listreview',
        title: 'Danh sách đánh giá',
        type: 'item',
        classes: 'nav-item',
        url: '/manages/review/review-list',
        icon: 'login',
        target: false,
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'login',
        title: 'Login',
        type: 'item',
        classes: 'nav-item',
        url: '/login',
        icon: 'login',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'register',
        title: 'Register',
        type: 'item',
        classes: 'nav-item',
        url: '/register',
        icon: 'profile',
        target: true,
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'utilities',
    title: 'UI Components',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'typography',
        title: 'Typography',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'font-size'
      },
      {
        id: 'color',
        title: 'Colors',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
        icon: 'bg-colors'
      },
      {
        id: 'tabler',
        title: 'Tabler',
        type: 'item',
        classes: 'nav-item',
        url: 'https://ant.design/components/icon',
        icon: 'ant-design',
        target: true,
        external: true
      }
    ]
  },

  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'chrome'
      },
      {
        id: 'document',
        title: 'Document',
        type: 'item',
        classes: 'nav-item',
        url: 'https://codedthemes.gitbook.io/mantis-angular/',
        icon: 'question',
        target: true,
        external: true
      }
    ]
  }
];
