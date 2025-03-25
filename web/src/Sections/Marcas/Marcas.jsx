import style from "./marcas.module.css"

import bosch from "../../assets/marcas/bosch.jpg"
import conarco from "../../assets/marcas/conarco.jpg"
import doblea from "../../assets/marcas/doblea.jpg"
import ezeta from "../../assets/marcas/ezeta.jpg"
import gherardi from "../../assets/marcas/gherardi.jpg"
import perfecto from "../../assets/marcas/perfecto.jpg"
import sola from "../../assets/marcas/sola.jpg"
import trefilcon from "../../assets/marcas/trefilcon.jpg"
import trespuntos from "../../assets/marcas/trespuntos.jpg"
import tyrolt from "../../assets/marcas/tyrolt.jpg"
import cerami from "../../assets/marcas/cerami.jpeg"
import claco from "../../assets/marcas/claco.jpeg"
import hda from "../../assets/marcas/hda.jpeg"
import kuwait from "../../assets/marcas/kuwait.jpeg"
import lorenzetti from "../../assets/marcas/lorenzetti.jpeg"
import moises from "../../assets/marcas/moises.jpeg"
import pinas from "../../assets/marcas/pinas.jpeg"
import pitbuild from "../../assets/marcas/pitbuild.jpeg"
import psf from "../../assets/marcas/psf.jpeg"
import sc from "../../assets/marcas/sc.jpeg"
import sideral from "../../assets/marcas/sideral.jpeg"


const marcas = [
    { src: bosch, alt: "Bosch" },
    { src: conarco, alt: "Conarco" },
    { src: doblea, alt: "Doble A" },
    { src: ezeta, alt: "Ezeta" },
    { src: gherardi, alt: "Gherardi" },
    { src: perfecto, alt: "Perfecto" },
    { src: sola, alt: "Sola" },
    { src: trefilcon, alt: "Trefilcon" },
    { src: trespuntos, alt: "Tres Puntos" },
    { src: tyrolt, alt: "Tyrolt" },
    { src: cerami, alt: "cerami" },
    { src: claco, alt: "claco" },
    { src: hda, alt: "hda" },
    { src: kuwait, alt: "kuwait" },
    { src: lorenzetti, alt: "lorenzetti" },
    { src: moises, alt: "moises" },
    { src: pinas, alt: "pinas" },
    { src: pitbuild, alt: "pitbuild" },
    { src: psf, alt: "psf" },
    { src: sc, alt: "sc" },
    { src: sideral, alt: "sideral" },
];

const Marcas = () => {
    return (
        <section id="nuestras-marcas" className={style.marcas}>
            <h1>Nuestras Marcas</h1>
            <div className={style.marcasContainer}>
                {marcas.map((marca, index) => (
                    <img key={index} src={marca.src} alt={marca.alt} className={style.marcaImagen} />
                ))}
            </div>

        </section>
    )
}

export default Marcas
