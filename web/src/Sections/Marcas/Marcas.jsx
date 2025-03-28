import style from "./marcas.module.css"
import { useState, useEffect } from "react";

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

import aliafor from "../../assets/marcas/aliafor.jpeg"
import bellota from "../../assets/marcas/bellota.jpg"
import black from "../../assets/marcas/black.jpeg"
import dewalt from "../../assets/marcas/dewalt.png"
import duke from "../../assets/marcas/duke.jpg"
import evel from "../../assets/marcas/EVEL.jpg"
import extrapol from "../../assets/marcas/extrapol.jpg"
import fame from "../../assets/marcas/fame.jpeg"
import fortex from "../../assets/marcas/fortex.jpeg"
import geltek from "../../assets/marcas/geltek.jpg"
import ginyplas from "../../assets/marcas/ginyplas.jpeg"
import glacoxan from "../../assets/marcas/glacoxan.jpg"
import grilon from "../../assets/marcas/grilon.jpg"
import hidro from "../../assets/marcas/hidro.png"
import latyn from "../../assets/marcas/latyn.png"
import makita from "../../assets/marcas/makita.jpeg"
import metz from "../../assets/marcas/metz.jpeg"
import nebraska from "../../assets/marcas/nebraska.jpeg"
import rapfix from "../../assets/marcas/rapfix.jpeg"
import santa from "../../assets/marcas/santa.png"
import sinpar from "../../assets/marcas/sinpar.jpeg"
import trabex from "../../assets/marcas/trabex.jpg"
import tramontina from "../../assets/marcas/tramontina.png"
import SliderMobile from "./components/SliderMobile";



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
    { src: aliafor, alt: "aliafor" },
    { src: bellota, alt: "bellota" },
    { src: black, alt: "black" },
    { src: dewalt, alt: "dewalt" },
    { src: duke, alt: "duke" },
    { src: evel, alt: "evel" },
    { src: extrapol, alt: "extrapol" },
    { src: fame, alt: "fame" },
    { src: fortex, alt: "fortex" },
    { src: geltek, alt: "geltek" },
    { src: ginyplas, alt: "ginyplas" },
    { src: glacoxan, alt: "glacoxan" },
    { src: grilon, alt: "grilon" },
    { src: hidro, alt: "hidro" },
    { src: latyn, alt: "latyn" },
    { src: makita, alt: "makita" },
    { src: metz, alt: "metz" },
    { src: nebraska, alt: "nebraska" },
    { src: rapfix, alt: "rapfix" },
    { src: santa, alt: "santa" },
    { src: sinpar, alt: "sinpar" },
    { src: trabex, alt: "trabex" },
    { src: tramontina, alt: "tramontina" },
];

const Marcas = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="nuestras-marcas" className={style.marcas}>
            <h1>Nuestras Marcas</h1>
            {isMobile ? (
                <SliderMobile marcas={marcas} />
            ) : (
                <div className={style.marcasContainer}>
                    {marcas.map((marca, index) => (
                        <img key={index} src={marca.src} alt={marca.alt} className={style.marcaImagen} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Marcas;