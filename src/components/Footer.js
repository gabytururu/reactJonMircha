const Footer = ({theme, language}) => {
    return (        
        <footer className={theme}>
            <h4>{language.footerTitle}</h4>
        </footer>
     
     );
}
 
export default Footer;