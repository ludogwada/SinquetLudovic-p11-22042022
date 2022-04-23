import { NavLink } from "react-router-dom"

function Card({cover,title}) {
    return(
        <NavLink to='/'>
            <div className="card">
                <img src={cover} alt="location" className="card__img" />
                <div className="card__titre">
                    <h3>{title}</h3>
                </div>
            </div>
        </NavLink>
    )
}

export default Card