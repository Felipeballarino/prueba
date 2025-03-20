import style from "./quieneSomos.module.css";
import banner3 from "../../assets/banner3.jpg"


const QuienesSomos = () => {
    return (
        <section id="sobre-nosotros" className={style.nosotros}>
            <h1>Sobre Nosotros</h1>
            <div className={style.info}>
                <div className={style.text}>
                    <p >
                        En Distribuidora García, somos una empresa que nació en 2010, construida sobre los sólidos cimientos del sacrificio personal y familiar.
                    </p>
                    <p> Desde nuestros inicios, hemos trabajado con dedicación y esfuerzo, enfrentando desafíos y celebrando logros, siempre con la firme convicción de que la perseverancia y la constancia son las claves del éxito.</p>
                </div>
                <div className={style.foto}>
                    <img src={banner3} alt="foto" />
                </div>
            </div>
            <div style={{ textAlign: "center", fontSize: "24px", color: "white", textTransform: "uppercase" }}>
                <p>Cada día es una nueva oportunidad para seguir creciendo y mejorando. Estamos aquí para servirte y para seguir construyendo juntos un futuro brillante.                </p>
            </div>
        </section>
    );
};

export default QuienesSomos;

