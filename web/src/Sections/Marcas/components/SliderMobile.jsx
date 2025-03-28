import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "../marcas.module.css"
import PropTypes from "prop-types";

const SliderMobile = ({ marcas }) => {
    return (
        <div>
            <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop
                autoPlay
                interval={3000}
                stopOnHover
                swipeable
            >
                {marcas.slice(0, 15).map((marca, index) => (
                    <div key={index}>
                        <img src={marca.src} alt={marca.alt} className={style.marcaImagen} />
                    </div>
                ))}
            </Carousel>
            <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop
                autoPlay
                interval={3000}
                stopOnHover
                swipeable
            >
                {marcas.slice(16, 30).map((marca, index) => (
                    <div key={index}>
                        <img src={marca.src} alt={marca.alt} className={style.marcaImagen} />
                    </div>
                ))}
            </Carousel>
            <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop
                autoPlay
                interval={3000}
                stopOnHover
                swipeable
            >
                {marcas.slice(31, 45).map((marca, index) => (
                    <div key={index}>
                        <img src={marca.src} alt={marca.alt} className={style.marcaImagen} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
SliderMobile.propTypes = {
    marcas: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default SliderMobile
