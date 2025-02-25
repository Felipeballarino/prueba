import style from "./quieneSomos.module.css"
import foto1 from "../../assets/banner1.jpg"

const QuienesSomos = () => {
    return (
        <div className={style.nosotros}>
            <div className={style.info}>
                <h1>Sobre Nosotros</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                    odit eius! Veritatis corrupti accusamus eos repudiandae deleniti alias, magnam blanditiis,
                    pariatur soluta nobis reprehenderit error cupiditate doloribus dignissimos iure autem.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                    odit eius! Veritatis corrupti accusamus eos repudiandae deleniti alias, magnam blanditiis,
                    pariatur soluta nobis reprehenderit error cupiditate doloribus dignissimos iure autem.
                </p>
                <img src={foto1} alt="foto1" />

            </div>

            <div className={style.foto}>
                <img src={foto1} alt="foto1" />
            </div>

        </div>
    )
}

export default QuienesSomos
