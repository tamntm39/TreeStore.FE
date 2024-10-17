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
    "id": "accountManagement",
    "title": "Quản lý tài khoản",
    "type": "group",
    "icon": "icon-user",
    "children": [
      {
        "id": "listuser",
        "title": "Danh sách người dùng",
        "type": "item",
        "classes": "nav-item",
        "url": "/manages/user/user-list",
        "icon": "user",
        "target": false,
        "breadcrumbs": false
      },
      {
        "id": "listcustomer",
        "title": "Danh sách khách hàng",
        "type": "item",
        "classes": "nav-item",
        "url": "/manages/customer/customer-list",
        "icon": "user",
        "target": false,
        "breadcrumbs": false
      }
    ]
  },
  {
    "id": "productManagement",
    "title": "Quản lý sản phẩm",
    "type": "group",
    "icon": "icon-box",
    "children": [
      {
        "id": "listcategory",
        "title": "Danh sách loại cây",
        "type": "item",
        "classes": "nav-item",
        "url": "/manages/category/category-list",
        "icon": "sun",
        "target": false,
        "breadcrumbs": false
      },
      {
        "id": "listproduct",
        "title": "Danh sách cây",
        "type": "item",
        "classes": "nav-item",
        "url": "/manages/product/product-list",
        "icon": "sun",
        "target": false,
        "breadcrumbs": false
      }
    ]
  },
  {
    "id": "reviewManagement",
    "title": "Quản lý đánh giá",
    "type": "group",
    "icon": "icon-star",
    "children": [
      {
        "id": "listreview",
        "title": "Danh sách đánh giá",
        "type": "item",
        "classes": "nav-item",
        "url": "/manages/review/review-list",
        "icon": "star",
        "target": false,
        "breadcrumbs": false
      }
    ]
  },
  {
    "id": "orderManagement",
    "title": "Quản lý đơn hàng",
    "type": "group",
    "icon": "icon-shopping-cart",
    "children": [
      {
        "id": "listorder",
        "title": "Danh sách đơn hàng",
        "type": "item",
        "classes": "nav-item",
        "url": "/manages/order/order-list",
        "icon": "dropbox",
        "target": false,
        "breadcrumbs": false
      }
    ]
  },
  {
    "id": "inventoryManagement",
    "title": "Quản lý tồn kho",
    "type": "group",
    "icon": "icon-warehouse",
    "children": [
      {
        "id": "listinventory",
        "title": "Danh sách tồn kho",
        "type": "item",
        "classes": "nav-item",
        "url": "/manages/inventory/inventory-list",
        "icon": "inbox",
        "target": false,
        "breadcrumbs": false
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
