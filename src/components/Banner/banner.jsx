function Banner(props) {
    const { image, title} = props

    return(
        <article className="banner">
            <img src={image} alt="paysage" className='banner__img'/>;
            <div className='banner__title'>
                <h1>{title}</h1>
            </div>
        </article>
    )
}

export default Banner