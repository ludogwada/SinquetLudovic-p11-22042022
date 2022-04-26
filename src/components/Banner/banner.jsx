function Banner({image}) {
    return(
        <article className="banner">
            <img src={image} alt="paysage" className='banner__img'/>;
            <div className='banner__titre'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </article>
    )
}

export default Banner