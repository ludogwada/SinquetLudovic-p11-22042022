import { NavLink } from "react-router-dom"

function Card({cover,title}) {
    return(
        <div className="card">
            <NavLink to='/'>
                <img src={cover} alt="location" />
                <div className="card__titre">
                    <h3>{title}</h3>
                </div>
            </NavLink>
        </div>
    )
}

export default Card