import Header from '../Components/Header/Header'
import Banners from '../Sections/Banners/Banners'
import Contacto from '../Sections/Contacto/Contacto'
import Marcas from '../Sections/Marcas/Marcas'
import QuienesSomos from '../Sections/QuienesSomos/QuienesSomos'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <div style={{ marginTop: "200px" }}>
                <Banners />
                <QuienesSomos />
                <Marcas />
                <Contacto />
            </div>
        </div>
    )
}

export default LandingPage
