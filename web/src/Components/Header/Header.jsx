import style from "./header.module.css";
import logo from "../../assets/logo.png";
import LoginModal from "../LoginModal";
import { useEffect, useState } from "react";
import { TOKEN } from "../../constant/api";

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "antd";

const Header = () => {
    const [open, setOpen] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isDownloadingPDF, setIsDownloadingPDF] = useState(false)
    const [isDownloadingXLSX, setIsDownloadingXLSX] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hideHeader, setHideHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Cuando el scroll baja más de 400px, ocultamos el header
            if (scrollY > 400) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const token = sessionStorage.getItem(TOKEN);
        if (token) {
            setIsAuthenticated(true);
        }
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 130;
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
            setMenuOpen(false);
        }
    };


    const handleLogout = () => {
        sessionStorage.removeItem(TOKEN);
        setIsAuthenticated(false);
    };

    const handleDownload = (type) => {
        if (type === "pdf") {
            setIsDownloadingPDF(true);
            const link = document.createElement("a");
            link.href = "https://drive.google.com/uc?export=download&id=1a44G9-gzZzr7ox3DkRD-zBhxxQ-lwuBI";
            link.setAttribute("download", "precios.pdf");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            setIsDownloadingXLSX(true)
            const link = document.createElement("a");
            link.href = "https://docs.google.com/spreadsheets/d/1x83v253A7YOT64wbOZPP8Zfu2BvBevIR/export?format=xlsx";
            link.setAttribute("download", "precios.xlsx");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        setTimeout(() => {
            setIsDownloadingXLSX(false);
            setIsDownloadingPDF(false)
        }, 3000);
    };

    return (
        <>
            <LoginModal open={open} setOpen={setOpen} setIsAuthenticated={setIsAuthenticated} />
            <div className={`${style.header} ${hideHeader ? style.hidden : ""}`}>
                <div className={style.headerTop}>
                    {isMobile &&
                        <button className={style.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    }
                    <button onClick={() => handleScroll("home")} className={style.logoContainer}>
                        <img src={logo} alt="logo1" className={style.logo} />
                    </button>
                    {isAuthenticated ? (
                        <button className={style.login} onClick={handleLogout}>
                            <LogoutIcon />
                            <p>Salir</p>
                        </button>
                    ) : (
                        <button onClick={() => setOpen(true)} className={style.login}>
                            <PermIdentityOutlinedIcon />
                            <p>Ingresar</p>
                        </button>
                    )}

                </div>
                {isMobile ?
                    <div className={`${style.mobileMenu} ${menuOpen ? style.menuOpen : ""}`}>
                        <ul  >
                            <li><button onClick={() => handleScroll("sobre-nosotros")}>Sobre Nosotros</button></li>
                            <li><button onClick={() => handleScroll("nuestras-marcas")}>Nuestras Marcas</button></li>
                            <li><button onClick={() => handleScroll("contactos-redes")}>Contactos y redes</button></li>
                            {isAuthenticated && (
                                <li style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    <Button
                                        onClick={() => handleDownload("pdf")}
                                        disabled={isDownloadingXLSX}
                                        loading={isDownloadingPDF}
                                        icon={<PictureAsPdfIcon />}
                                    >
                                        Precios.pdf
                                    </Button>
                                    <Button
                                        onClick={() => handleDownload("xlsx")}
                                        disabled={isDownloadingPDF}
                                        loading={isDownloadingXLSX}
                                        icon={<UploadFileIcon />}
                                    >
                                        Precios.xlsx
                                    </Button>
                                </li>
                            )}
                        </ul>
                    </div>
                    :
                    <ul className={style.menu} >
                        <li><button onClick={() => handleScroll("sobre-nosotros")}>Sobre Nosotros</button></li>
                        <li><button onClick={() => handleScroll("nuestras-marcas")}>Nuestras Marcas</button></li>
                        <li><button onClick={() => handleScroll("contactos-redes")}>Contactos y redes</button></li>
                        {isAuthenticated && (
                            <li style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <Button
                                    onClick={() => handleDownload("pdf")}
                                    disabled={isDownloadingXLSX}
                                    loading={isDownloadingPDF}
                                    icon={<PictureAsPdfIcon />}
                                >
                                    Precios.pdf
                                </Button>
                                <Button
                                    onClick={() => handleDownload("xlsx")}
                                    disabled={isDownloadingPDF}
                                    loading={isDownloadingXLSX}
                                    icon={<UploadFileIcon />}
                                >
                                    Precios.xlsx
                                </Button>
                            </li>
                        )}
                    </ul>}
            </div >
        </>
    );
};

export default Header;