import banner1 from "../../assets/banner1.png"
import banner2 from "../../assets/banner2.jpeg"
import banner3 from "../../assets/banner3.jpg"
import style from "./banners.module.css"

import { Carousel } from 'antd';


const Banners = () => {

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 130; // Ajusta este valor según lo que necesites
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
        }
    };
    return (
        <div >
            <Carousel autoplay id="home" className={style.banners}>
                {[banner1, banner2, banner3].map((banner, index) => (
                    <div key={index} className={style.bannerItem}>
                        <div className={style.overlay}>
                            <img src={banner} alt={`banner${index + 1}`} className={style.bannerImage} />
                            <div className={style.textContainer}>
                                <h1>Construye con confianza, <br /> trabajamos contigo.</h1>
                                <button onClick={() => handleScroll("sobre-nosotros")}>Conócenos</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
            <div className={style.infoText}>
                <h1>Donde la calidad y el servicio se encuentran.</h1>
            </div>
        </div>
    )
}

export default Banners

