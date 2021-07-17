import ProductDetail from "../pages/detailpage/ProductDetail";
import Shop from "../pages/productpage/Shop";


import Home from "../pages/homepage/Home";
import Login from "../pages/customer/Login";
import Customer from "../pages/customer/Customer";
import Profile from "../pages/customer/Profile";
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
    component: Login,
    name: 'Cart',
    pub:true,
    user:true,
    admin:true,
    sub:[],
},
{
    path: '/customer',
    component: Customer,
    name: 'Customer',
    pub:true,
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
    path: '/profile',
    component: Profile,
    name: 'Profile',
    pub:false,
    user:true,
    admin:true,
    sub:[],
},
];

