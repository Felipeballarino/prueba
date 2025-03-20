import style from "./header.module.css";
import logo from "../../assets/logo.png";
import LoginModal from "../LoginModal";
import { useEffect, useState } from "react";
import { TOKEN } from "../../constant/api";

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from "antd";

const Header = () => {
    const [open, setOpen] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem(TOKEN);
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);


    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 130; // Ajusta este valor según lo que necesites
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
        }
    };


    const handleLogout = () => {
        sessionStorage.removeItem(TOKEN);
        setIsAuthenticated(false);
    };

    const handleDownload = () => {
        setIsDownloading(true);

        const link = document.createElement("a");
        link.href = "https://drive.google.com/uc?export=download&id=19BgRUMz-IfuoNHHM8CvyBRnjlyDcoTG7";
        link.setAttribute("download", "precios.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            setIsDownloading(false);
        }, 3000);
    };

    return (
        <>
            <LoginModal open={open} setOpen={setOpen} setIsAuthenticated={setIsAuthenticated} />
            <div className={style.header}>
                <div className={style.headerTop}>
                    <button onClick={() => handleScroll("home")} className={style.logoContainer}>
                        <img src={logo} alt="logo1" className={style.logo} />
                    </button>
                    {isAuthenticated ? (
                        <button className={style.login} onClick={handleLogout}>
                            <LogoutIcon />
                            Salir
                        </button>
                    ) : (
                        <button onClick={() => setOpen(true)} className={style.login}>
                            <PermIdentityOutlinedIcon />
                            Ingresar
                        </button>
                    )}
                </div>
                <ul className={style.menu}>
                    <li><button onClick={() => handleScroll("sobre-nosotros")}>Sobre Nosotros</button></li>
                    <li><button onClick={() => handleScroll("nuestras-marcas")}>Nuestras Marcas</button></li>
                    <li><button onClick={() => handleScroll("contactos-redes")}>Contactos y redes</button></li>
                    {isAuthenticated && (
                        <li>
                            <Button
                                onClick={handleDownload}
                                disabled={isDownloading}
                                loading={isDownloading}
                                icon={<DownloadIcon />}
                            >
                                PRECIOS
                            </Button>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Header;