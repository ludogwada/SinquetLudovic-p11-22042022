function Card(props) {
    const {cover, title} = props

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