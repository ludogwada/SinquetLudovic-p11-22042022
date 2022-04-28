function Banner({image, title}) {
    return(
        <article className="banner">
            <img src={image} alt="paysage" className='banner__img'/>;
            <div className='banner__titre'>
                <h1>{title}</h1>
            </div>
        </article>
    )
}

export default Banner