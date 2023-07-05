import Header from "./HeaderContext";
import Main from "./Main";
import Footer from "./Footer";
import {useState} from 'react'
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import FooterContext from "./FooterContext";
import { ThemeProvider } from "../Context/ThemeContext";
import { LanguageProvider } from "../Context/LanguageContext";
import { AuthProvider } from "../Context/AuthContext"

const MyPageContext = () => {

    return ( 
        <div className="my-page">
            <ThemeProvider>
                <AuthProvider>
                    <LanguageProvider>
                        <HeaderContext />
                        <MainContext />
                        <FooterContext />         
                    </LanguageProvider>               
                </AuthProvider>
            </ThemeProvider>
        </div>
     );
}
export default MyPageContext;
