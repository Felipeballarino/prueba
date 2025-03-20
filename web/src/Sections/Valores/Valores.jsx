import style from "./Valores.module.css";
import { IoMdTrendingUp } from "react-icons/io";
import { GiSandsOfTime } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";

const Valores = () => {
    return (
        <div className={style.valores}>
            <ul>
                <li><IoMdTrendingUp /> Perseverancia</li>
                <li><GiSandsOfTime /> Constancia</li>
                <li><MdFavorite /> Sacrificio</li>
                <li><FaShieldAlt /> Integridad</li>
            </ul>
        </div>
    )
}

export default Valores
