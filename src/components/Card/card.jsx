function Card({cover,title}) {
    return(
        <article className="card">
                <img src={cover} alt="location" className="card__img" />
                <div className="card__titre">
                    <h3>{title}</h3>
                </div>
        </article>
    )
}

export default Card