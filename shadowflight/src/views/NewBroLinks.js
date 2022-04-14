import NavBar from '../components/NavBar'
import Header from '../components/Head'
import Footer from '../components/Footer'
import Links from '../components/Links'
export default () => {

    return (
        <>
            <div id="background">
                <Header/>
                <NavBar/>
                <Links/>
                <Footer/>
            </div>
        </>
    )
}
