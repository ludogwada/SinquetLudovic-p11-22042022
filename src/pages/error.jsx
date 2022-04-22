import { Link } from "react-router-dom"
import'../index.css'

function Error() {
    return (
        <div>
            <div className="error">
                <span className="error__text">404</span>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div> 
            <div className="redirection" >
                <Link to="/">
                    <h4 className="redirection__h4">Retourner sur la page d'accueil</h4>
                </Link>
            </div>
        </div>
    )
}

export default Error