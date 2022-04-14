import { Link } from '@reach/router';
import '../App.css';
import '../Main.css'
import logo from '../static/logoLight.png'



const Head = () => {

    return (
        <div id='headspace'>
            <div>
                <h1>
                    <img src={logo} id='Logo'/>
                    <br/>
                    Shadow Flight
                </h1>
            </div>
        </div>
    )
}
export default Head;