import { NavLink } from "react-router-dom"

function Card({cover,title}) {
    return(
        <article className="card">
            <NavLink to='/'>
                <img src={cover} alt="location" className="card__img" />
                <div className="card__titre">
                    <h3>{title}</h3>
                </div>
            </NavLink>
        </article>
    )
}

export default Card