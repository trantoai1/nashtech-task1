import ProductDetail from "../pages/detailpage/ProductDetail";
import Shop from "../pages/productpage/Shop";


import Home from "../pages/homepage/Home";
import Login from "../pages/customer/Login";
import Customer from "../pages/customer/Customer";
import Profile from "../pages/customer/Profile";
import DashBoard from "../pages/dashboard/DashBoard";
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/cart/CheckOut";
import Orders from "../pages/customer/Orders";
import Order from "../pages/customer/Order";
export  const routes = [
{
    path: '/',
    component: Home,
    name: 'Home',
    pub:true,
    user:false,
    admin:false,
    sub:[],
},
{
    path: '/products/:id',
    component: ProductDetail,
    name: 'Product Detail',
    pub:false,
    user:false,
    admin:false,
    sub:[],
},
{
    path: '/products',
    component: Shop,
    name: 'Product',
    pub:true,
    user:false,
    admin:false,
    sub:[],
},
{
    path: '/cart',
    component: Cart,
    name: 'Cart',
    pub:true,
    user:false,
    admin:false,
    sub:[],
},
{
    path: '/customer',
    component: Customer,
    name: 'Customer',
    pub:false,
    user:false,
    admin:false,
    sub:[],
}, /* And so on. */
{
    path: '/signin',
    component: Login,
    name: 'Login',
    pub:false,
    user:false,
    admin:false,
    sub:[],
},
{
    path: '/checkout',
    component: CheckOut,
    name: 'Check Out',
    pub:false,
    user:true,
    admin:false,
    sub:[],
},
{
    path: '/orders',
    component: Orders,
    name: 'Orders',
    pub:false,
    user:true,
    admin:false,
    sub:[],
},
{
    path: '/profile',
    component: Profile,
    name: 'Profile',
    pub:false,
    user:true,
    admin:false,
    sub:[],
},

{
    path: '/orders/:id',
    component: Order,
    name: 'Order',
    pub:false,
    user:true,
    admin:false,
    sub:[],
},
{
    path: '/dashboard',
    component: DashBoard,
    name: 'DashBoard',
    pub:false,
    user:false,
    admin:true,
    sub:[],
},
];

