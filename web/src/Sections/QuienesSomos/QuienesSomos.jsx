import style from "./quieneSomos.module.css"
import foto1 from "../../assets/banner1.jpg"

const QuienesSomos = () => {
    return (
        <section id="sobre-nosotros" className={style.nosotros}>
            <div className={style.info}>
                <h1>Sobre Nosotros</h1>
                <p>
                    En Distribuidora García, somos una empresa que nació en 2010, construida sobre los sólidos cimientos del
                    sacrificio personal y familiar.
                    Desde nuestros inicios, hemos trabajado con dedicación y esfuerzo, enfrentando desafíos y celebrando logros,
                    siempre con la firme convicción de que la perseverancia y la constancia son las claves del éxito.
                    Cada paso que hemos dado ha sido impulsado por el deseo de ofrecer lo mejor a nuestros clientes y de contribuir
                    al bienestar de nuestra comunidad.
                </p>

                <div>
                    <h2>Nuestros Valores</h2>
                    <p>En Distribuidora García, nos guiamos por valores que son el corazón de nuestra empresa:
                        perseverancia, constancia, sacrificio e integridad. Creemos que cada obstáculo es una
                        oportunidad para crecer y aprender. Nos esforzamos por seguir adelante, sin importar las
                        dificultades que se presenten. La dedicación diaria y el compromiso con nuestros objetivos
                        nos permiten alcanzar nuestras metas y ofrecer un servicio de calidad. Reconocemos que el
                        éxito requiere esfuerzo y sacrificio. Estamos dispuestos a dar lo mejor de
                        nosotros para lograr nuestros sueños y los de nuestros clientes. Actuamos con honestidad y
                        transparencia en todas nuestras relaciones, construyendo confianza con nuestros clientes y
                        socios.
                    </p>
                </div>

            </div>

            <div className={style.right}>
                <div>
                    <h3>Misión</h3>
                    <p>
                        Nuestra misión es ser un referente en la distribución de productos de calidad,
                        brindando un servicio excepcional que supere las expectativas de nuestros clientes.
                        Nos comprometemos a trabajar con integridad y responsabilidad, asegurando que cada
                        producto que distribuimos refleje nuestro compromiso con la excelencia.
                    </p>
                </div>
                <div>
                    <h3>Visión</h3>
                    <p>
                        Aspiramos a ser la empresa líder en el sector de distribución,
                        reconocida por nuestra capacidad de adaptación y por la confianza que
                        generamos en nuestros clientes. Queremos expandir nuestras operaciones,
                        siempre manteniendo nuestros valores fundamentales y contribuyendo al desarrollo
                        sostenible de nuestra comunidad.
                    </p>
                </div>
                <img src={foto1} alt="foto1" />

            </div>

        </section>
    )
}

export default QuienesSomos
