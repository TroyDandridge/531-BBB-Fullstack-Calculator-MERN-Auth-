import gymPicture from "./gymPicture.jpg"
import user from ".//user.png"
import password from "./password.png"
import "./Login.css"
import {Link} from 'react-router-dom' 


function Login(){

    return(
        <div className="login-page">
        <div className="container">
            <div className="image">
                <h1>Welcome to the 531 BBB Calculator</h1>
                <img className="gym" src={gymPicture} alt="Gym Photo" />
            </div>
            <form className="form">
                <h1 className="form-text">User Login</h1>
                <input id="username" className="info" type="text" placeholder="Username"/>
                <input id="password" className="info" type="password" placeholder="Password"/>
                <button className="button-login">Login</button>
                <Link to="/Calculator.jsx">
                    <button className="button-guest">Continue as Guest</button>
                </Link>
                <a href="https://www.tigerfitness.com/blogs/training-programs/the-complete-5-3-1-bbb-program-guide-the-ultimate-blueprint-for-strength-size-and-simplicity?srsltid=AfmBOorv1PHHttPp1tCWF3woGMGtNb7PW_-yQCwI9LGBpyoRxSBIeXye"
                target="_blank" 
                rel="noopener noreferrer">
                    <h3>What is 531 BBB?</h3>
                </a>
            </form>
        </div>
        </div>
    )
}

export default Login