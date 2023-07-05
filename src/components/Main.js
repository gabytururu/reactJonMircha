const Header = ({theme, language, auth}) => {
    return (       
        <main className={theme}>
            <p>{auth ?
              language.mainHello
            :
              language.mainWelcome
            }</p>
           
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque mollitia ea neque fugiat magnam inventore cum reiciendis delectus numquam. Vero unde perspiciatis earum sunt reiciendis aliquam id quos debitis quas?</p>
        </main>
     );
}
 
export default Header;