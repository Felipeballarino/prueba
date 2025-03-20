import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.avif"
import banner3 from "../../assets/banner3.jpg"
import style from "./banners.module.css"



const Banners = () => {
    return (
        <div style={{ padding: "0 4rem" }}>
            <div id="home" className={style.banners}>
                <img src={banner1} alt="banner1" />
                <img src={banner2} alt="banner2" />
                <img src={banner3} alt="banner3" />

            </div>
            <div className={style.infoText}>
                <h1>Donde la calidad y el servicio se encuentran.</h1>
            </div>
        </div>
    )
}

export default Banners
