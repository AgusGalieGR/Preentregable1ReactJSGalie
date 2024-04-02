import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import CartWidget from "./CartWidget";
function NavBar(){
    const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
                <h3>Logo</h3>
                <nav ref={navRef}>
                    <a href="">Catalogo</a>
                    <a href="">Categorias</a>
                    <a href="">Contacto</a>
                    <a href=""><CartWidget></CartWidget></a>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar()}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar()}>
                    <FaBars/>
                </button>
        </header>
    );
}
export default NavBar;