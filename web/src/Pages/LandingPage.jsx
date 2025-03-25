import Header from '../Components/Header/Header'
import Banners from '../Sections/Banners/Banners'
import Contacto from '../Sections/Contacto/Contacto'
import Marcas from '../Sections/Marcas/Marcas'
import QuienesSomos from '../Sections/QuienesSomos/QuienesSomos'
import Valores from '../Sections/Valores/Valores'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <div style={{ marginTop: "150px" }}>
                <Banners />
                <Valores />
                <QuienesSomos />
                <Marcas />
                <Contacto />
            </div>
        </div>
    )
}

export default LandingPage
