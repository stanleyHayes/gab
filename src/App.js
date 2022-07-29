import './App.css';
import AboutPage from "./pages/about/about-page";
import {Route, Routes} from "react-router";
import {ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {THEMES} from "./utils/themes";
import {selectUI} from "./redux/features/ui/ui-slice";
import MembersPage from "./pages/members/members-page";
import TreasuryAndMarketsPage from "./pages/treasury-and-markets/treasury-and-markets-page";
import NewsPage from "./pages/news/news-page";
import GalleryPage from "./pages/gallery/gallery-page";
import HomePage from "./pages/home/home-page";
import NotFoundPage from "./pages/404/not-found-page";
import ContactPage from "./pages/contact/contact-page";
import FlipBookPage from "./pages/treasury-and-markets/flip-book-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import LoginPage from "./pages/authentication/login-page";
import RegisterPage from "./pages/authentication/register-page";

function App() {
    const {themeVariant} = useSelector(selectUI);
    const theme = themeVariant === 'dark' ? THEMES.lightTheme : THEMES.lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route element={<HomePage/>} exact={true} path="/"/>
                <Route element={<ContactPage/>} exact={true} path="/contact"/>
                <Route element={<AboutPage/>} exact={true} path="/about"/>
                <Route element={<MembersPage/>} exact={true} path="/members"/>
                <Route element={<TreasuryAndMarketsPage/>} exact={true} path="/treasury-and-markets"/>
                <Route element={<NewsPage/>} exact={true} path="/news"/>
                <Route element={<GalleryPage/>} exact={true} path="/gallery"/>
                <Route element={<FlipBookPage/>} exact={true} path="/magazines/:magazineID"/>
                <Route element={<RegisterPage/>} exact={true} path="/auth/register"/>
                <Route element={<LoginPage/>} exact={true} path="/auth/login"/>
                <Route element={<ResetPasswordPage/>} exact={true} path="/auth/reset-password"/>
                <Route element={<ForgotPasswordPage/>} exact={true} path="/auth/forgot-password"/>
                <Route element={<NotFoundPage/>} exact={true} path="*"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
