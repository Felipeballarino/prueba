import style from "./header.module.css"
import logo from "../../assets/logo.png";
const Header = () => {
    return (
        <div className={style.header}>
            <img src={logo} alt="logo1" className={style.logo} />
            <ul className={style.menu}>
                <li>Sobre Nosotros</li>
                <li>Nuestras Marcas</li>
                <li>Contactos y redes</li>
            </ul>
        </div>
    )
}

export default Header
