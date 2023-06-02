import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import ProductDetailPage from './pages/productDetailPage';
import ShoppingCart from './pages/shoppingCart';
import CheckOutPage from "./pages/checkOutPage";
import BlogPage from "./pages/blogPage";
import ContactPage from "./pages/contactPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from './pages/signUpPage';

const routerList = [
    {path: "/", element: <HomePage />},
    {path: "/products", element: <ProductPage />},
    {path: '/products/:product-id', element: <ProductDetailPage />},
    {path: '/products/shopping-cart', element: <ShoppingCart />},
    {path: "/products/check-out", element: <CheckOutPage />},
    {path: '/blog-page', element: <BlogPage />},
    {path: "/contact-us", element: <ContactPage />},
    {path: "/login", element: <LoginPage />},
    {path: '/login/sign-up', element: <SignUpPage />},
]

export default routerList;