
import Footer from "../components/footerComponent/Footer"
import Header from "../components/headerComponent/Header"

const ShopLayout = ({children}) => {
    return (

            <div className="home-page">
                <Header/>
                {children}
                <Footer/>
            </div>

    )
}
export default ShopLayout;